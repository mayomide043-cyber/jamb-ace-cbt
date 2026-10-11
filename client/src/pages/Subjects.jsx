import { useState } from 'react'
import { Link } from 'react-router-dom'
import { subjects } from '../data/subjects.js'
import { sampleQuestions } from '../data/sampleQuestions.js'
export const count = id => sampleQuestions.filter(q => q.subject === id).length
export default function Subjects() {
  const [term, setTerm] = useState('')
  const list = subjects.filter(s => s.name.toLowerCase().includes(term.toLowerCase()))
  return (<div className="mx-auto max-w-6xl px-4 py-10"><h1 className="text-3xl font-bold">Subjects</h1>
    <label className="mt-4 block text-sm font-medium" htmlFor="q">Search subjects</label>
    <input id="q" value={term} onChange={e=>setTerm(e.target.value)} className="mt-1 w-full max-w-md rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-600 dark:bg-navy-800"/>
    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{list.map(s=><Link key={s.id} to={s.id} className="card hover:border-ace-500"><h2 className="font-semibold">{s.name}</h2><p className="text-sm text-slate-600 dark:text-slate-300">{s.description}</p><p className="mt-2 text-xs">{count(s.id)} questions, {s.topics.length} topics</p></Link>)}
    {!list.length && <p>No subject matches "{term}". Try a shorter search.</p>}</div></div>)
}
