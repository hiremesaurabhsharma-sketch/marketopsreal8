import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'cases.json');

export async function GET() {
  try {
    const fileContents = fs.readFileSync(dataFilePath, 'utf8');
    const cases = JSON.parse(fileContents);
    return NextResponse.json(cases);
  } catch (error) {
    console.error('Failed to read cases.json:', error);
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
    
    // Write back to the JSON file
    fs.writeFileSync(dataFilePath, JSON.stringify(newCases, null, 2), 'utf8');
    
    return NextResponse.json({ success: true, message: 'Cases updated successfully' });
  } catch (error) {
    console.error('Failed to write cases.json:', error);
    return NextResponse.json({ error: 'Failed to save cases' }, { status: 500 });
  }
}
