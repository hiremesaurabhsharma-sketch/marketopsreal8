"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminCasesPage() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    id: '',
    slug: '',
    category: 'ecommerce',
    categoryLabel: 'Ecommerce Solutions',
    title: '',
    clientName: '',
    niche: '',
    metrics: { label: '', start: '', end: '', growth: '' },
    adSpend: '',
    roas: '',
    progress: 80,
    overview: '',
    challenge: '',
    solution: ['', '', ''],
    metricsDetail: { primary: '', secondary: '', tertiary: '' },
    takeaway: ''
  });

  // Fetch Cases on Load
  useEffect(() => {
    fetch('/api/cases')
      .then(res => res.json())
      .then(data => {
        setCases(data);
        setLoading(false);
      });
  }, []);

  const handleEdit = (caseItem) => {
    setEditingId(caseItem.id);
    setFormData(JSON.parse(JSON.stringify(caseItem))); // Deep copy
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddNew = () => {
    setEditingId('new');
    setFormData({
      id: Date.now(), // Generate unique ID
      slug: '',
      category: 'ecommerce',
      categoryLabel: 'Ecommerce Solutions',
      title: '',
      clientName: '',
      niche: '',
      metrics: { label: '', start: '', end: '', growth: '' },
      adSpend: '',
      roas: '',
      progress: 80,
      overview: '',
      challenge: '',
      solution: ['', '', ''],
      metricsDetail: { primary: '', secondary: '', tertiary: '' },
      takeaway: ''
    });
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    
    let updatedCases = [...cases];
    
    if (editingId === 'new') {
      updatedCases.push(formData);
    } else {
      updatedCases = updatedCases.map(c => c.id === formData.id ? formData : c);
    }
    
    try {
      const res = await fetch('/api/cases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCases),
      });
      
      if (res.ok) {
        setCases(updatedCases);
        setEditingId(null);
        alert('Case study saved successfully!');
      } else {
        alert('Failed to save case study.');
      }
    } catch (err) {
      console.error(err);
      alert('Error saving data.');
    }
    setSaving(false);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;
    
    const updatedCases = cases.filter(c => c.id !== id);
    setSaving(true);
    try {
      const res = await fetch('/api/cases', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCases),
      });
      if (res.ok) {
        setCases(updatedCases);
      }
    } catch (err) {
      console.error(err);
    }
    setSaving(false);
  };

  const updateSolution = (index, value) => {
    const newSolution = [...formData.solution];
    newSolution[index] = value;
    setFormData({ ...formData, solution: newSolution });
  };
  
  const addSolutionPoint = () => {
    setFormData({ ...formData, solution: [...formData.solution, ''] });
  };
  
  const removeSolutionPoint = (index) => {
    const newSolution = formData.solution.filter((_, i) => i !== index);
    setFormData({ ...formData, solution: newSolution });
  };

  if (loading) return <div className="p-20 text-center text-xl">Loading Admin Panel...</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Case Studies Admin</h1>
            <p className="text-slate-600 mt-1">Manage your portfolio and success stories.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/cases" className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg transition-colors font-medium">
              View Live Page
            </Link>
            {!editingId && (
              <button onClick={handleAddNew} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors font-medium">
                + Add New Case
              </button>
            )}
          </div>
        </div>

        {/* EDITOR FORM */}
        {editingId && (
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-4">
              {editingId === 'new' ? 'Create New Case Study' : `Editing: ${formData.title}`}
            </h2>
            
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Title</label>
                  <input required type="text" className="w-full border-slate-300 rounded-lg p-3 border focus:ring-2 focus:ring-indigo-500 outline-none" 
                    value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Scaling Brand X to $1M" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">URL Slug</label>
                  <input required type="text" className="w-full border-slate-300 rounded-lg p-3 border focus:ring-2 focus:ring-indigo-500 outline-none" 
                    value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} placeholder="e.g. brand-x-scaling" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Client Name</label>
                  <input required type="text" className="w-full border-slate-300 rounded-lg p-3 border focus:ring-2 focus:ring-indigo-500 outline-none" 
                    value={formData.clientName} onChange={e => setFormData({...formData, clientName: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Category ID</label>
                  <select className="w-full border-slate-300 rounded-lg p-3 border focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
                    value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                    <option value="ecommerce">ecommerce</option>
                    <option value="performance">performance</option>
                    <option value="webdev">webdev</option>
                    <option value="seo">seo</option>
                    <option value="creative">creative</option>
                    <option value="overseas">overseas</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Category Label</label>
                  <input required type="text" className="w-full border-slate-300 rounded-lg p-3 border focus:ring-2 focus:ring-indigo-500 outline-none" 
                    value={formData.categoryLabel} onChange={e => setFormData({...formData, categoryLabel: e.target.value})} placeholder="e.g. Ecommerce Solutions" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Overview / Intro</label>
                <textarea required rows="3" className="w-full border-slate-300 rounded-lg p-3 border focus:ring-2 focus:ring-indigo-500 outline-none" 
                  value={formData.overview} onChange={e => setFormData({...formData, overview: e.target.value})}></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">The Challenge</label>
                <textarea required rows="2" className="w-full border-slate-300 rounded-lg p-3 border focus:ring-2 focus:ring-indigo-500 outline-none" 
                  value={formData.challenge} onChange={e => setFormData({...formData, challenge: e.target.value})}></textarea>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-slate-800">Solutions Implemented (Bullet Points)</h3>
                  <button type="button" onClick={addSolutionPoint} className="text-sm bg-slate-200 hover:bg-slate-300 px-3 py-1 rounded">Add Point</button>
                </div>
                {formData.solution.map((point, index) => (
                  <div key={index} className="flex gap-2">
                    <input type="text" className="flex-1 border-slate-300 rounded-lg p-3 border outline-none" 
                      value={point} onChange={e => updateSolution(index, e.target.value)} placeholder={`Solution point ${index + 1}`} />
                    <button type="button" onClick={() => removeSolutionPoint(index)} className="text-red-500 px-2 font-bold text-xl hover:bg-red-50 rounded-lg">&times;</button>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-4 gap-4 p-4 border border-indigo-100 bg-indigo-50/50 rounded-xl">
                <div className="col-span-4 font-semibold text-indigo-900 mb-2 border-b border-indigo-100 pb-2">Hero Metrics</div>
                <div>
                  <label className="block text-xs font-semibold text-indigo-700 mb-1">Metric Label</label>
                  <input type="text" className="w-full border-indigo-200 rounded p-2 border outline-none" value={formData.metrics.label} onChange={e => setFormData({...formData, metrics: {...formData.metrics, label: e.target.value}})} placeholder="e.g. Monthly Revenue" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-indigo-700 mb-1">Start Value</label>
                  <input type="text" className="w-full border-indigo-200 rounded p-2 border outline-none" value={formData.metrics.start} onChange={e => setFormData({...formData, metrics: {...formData.metrics, start: e.target.value}})} placeholder="e.g. $10k" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-indigo-700 mb-1">End Value</label>
                  <input type="text" className="w-full border-indigo-200 rounded p-2 border outline-none" value={formData.metrics.end} onChange={e => setFormData({...formData, metrics: {...formData.metrics, end: e.target.value}})} placeholder="e.g. $100k" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-indigo-700 mb-1">Growth Text</label>
                  <input type="text" className="w-full border-indigo-200 rounded p-2 border outline-none font-bold text-indigo-600" value={formData.metrics.growth} onChange={e => setFormData({...formData, metrics: {...formData.metrics, growth: e.target.value}})} placeholder="e.g. +900%" />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-8 pt-6 border-t">
                <button type="button" onClick={handleCancel} className="px-6 py-3 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={saving} className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-lg shadow-indigo-200 transition-all">
                  {saving ? 'Saving...' : 'Save Case Study'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* LIST ALL CASES */}
        {!editingId && (
          <div className="grid gap-4">
            {cases.length === 0 && <div className="text-slate-500 py-8">No case studies found.</div>}
            
            {cases.map((c) => (
              <div key={c.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider">{c.category}</span>
                    <span className="text-sm text-slate-500 font-medium">ID: {c.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{c.title}</h3>
                  <p className="text-slate-600 text-sm mt-1">Client: {c.clientName} | Growth: {c.metrics?.growth}</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <button onClick={() => handleEdit(c)} className="flex-1 md:flex-none px-5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-lg transition-colors">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(c.id)} className="px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-lg transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
