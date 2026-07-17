import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Redis } from '@upstash/redis';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'cases.json');

// Initialize Redis if environment variables are present (Vercel Production)
const redis = (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) 
  ? new Redis({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    }) 
  : null;

export async function GET() {
  try {
    let cases = [];
    
    if (redis) {
      // Fetch from Upstash Redis (Vercel)
      const data = await redis.get('marketops_cases');
      cases = data ? (typeof data === 'string' ? JSON.parse(data) : data) : [];
      
      // If redis is empty but we have local cases, seed the redis DB initially
      if (cases.length === 0) {
        if (fs.existsSync(dataFilePath)) {
          const fileContents = fs.readFileSync(dataFilePath, 'utf8');
          cases = JSON.parse(fileContents);
          await redis.set('marketops_cases', cases);
        }
      }
    } else {
      // Fetch from local JSON file (Local Dev / VPS)
      if (fs.existsSync(dataFilePath)) {
        const fileContents = fs.readFileSync(dataFilePath, 'utf8');
        cases = JSON.parse(fileContents);
      }
    }
    
    return NextResponse.json(cases);
  } catch (error) {
    console.error('Failed to read cases:', error);
    return NextResponse.json({ error: 'Failed to fetch cases' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const authHeader = request.headers.get('authorization');
    const expectedPassword = process.env.ADMIN_PASSWORD || 'MarketOps2026';
    
    if (authHeader !== `Bearer ${expectedPassword}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const newCases = await request.json();
    
    if (redis) {
      // Write to Upstash Redis (Vercel)
      await redis.set('marketops_cases', newCases);
    } else {
      // Write back to the JSON file (Local Dev / VPS)
      fs.writeFileSync(dataFilePath, JSON.stringify(newCases, null, 2), 'utf8');
    }
    
    return NextResponse.json({ success: true, message: 'Cases updated successfully' });
  } catch (error) {
    console.error('Failed to write cases:', error);
    return NextResponse.json({ error: 'Failed to save cases' }, { status: 500 });
  }
}
