import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { subjects } from '../data/subjects.js'
import { sampleQuestions } from '../data/sampleQuestions.js'
const L = ['A','B','C','D']
export default function Practice() {
  const [params] = useSearchParams()
  const [subject, setSubject] = useState(params.get('subject') || 'all')
  const [started, setStarted] = useState(false)
  const [i, setI] = useState(0); const [picked, setPicked] = useState({}); const [done, setDone] = useState(false)
  const qs = useMemo(() => sampleQuestions.filter(q => subject === 'all' || q.subject === subject), [subject])
  if (!started) return (<div className="mx-auto max-w-xl px-4 py-10"><h1 className="text-3xl font-bold">Quick Practice</h1>
    <label htmlFor="sub" className="mt-4 block text-sm font-medium">Subject</label>
    <select id="sub" value={subject} onChange={e=>setSubject(e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 dark:border-slate-600 dark:bg-navy-800">
      <option value="all">All subjects</option>{subjects.filter(s=>sampleQuestions.some(q=>q.subject===s.id)).map(s=><option key={s.id} value={s.id}>{s.name}</option>)}</select>
    <p className="mt-3 text-sm">{qs.length} questions. Sample questions are original practice items, not official JAMB questions.</p>
    <button className="btn btn-primary mt-4" disabled={!qs.length} onClick={()=>setStarted(true)}>Start</button></div>)
  if (done) { const right = qs.filter(q => picked[q.id] === q.a).length
    return (<div className="mx-auto max-w-xl px-4 py-10 text-center"><h1 className="text-3xl font-bold">You got {right} of {qs.length}</h1><p className="mt-2">Accuracy {Math.round(right/qs.length*100)}%</p>
      <button className="btn btn-primary mt-4" onClick={()=>{setStarted(false);setI(0);setPicked({});setDone(false)}}>Practise again</button></div>) }
  const q = qs[i]; const ans = picked[q.id]; const shown = ans !== undefined
  return (<div className="mx-auto max-w-2xl px-4 py-8"><p className="text-sm">Question {i+1} of {qs.length}. {q.topic}. {q.type}</p>
    <h1 className="mt-2 text-xl font-semibold">{q.q}</h1>
    <div className="mt-4 space-y-2" role="radiogroup" aria-label="Answer options">{q.o.map((o,k)=>{
      const cls = !shown ? 'hover:border-ace-500' : k===q.a ? 'border-ace-600 bg-ace-50 dark:bg-navy-800' : k===ans ? 'border-red-500 bg-red-50 dark:bg-red-950' : ''
      return <button key={k} role="radio" aria-checked={ans===k} disabled={shown} onClick={()=>setPicked({...picked,[q.id]:k})} className={`card w-full text-left ${cls}`}><b>{L[k]}.</b> {o}</button>})}</div>
    {shown && <p className="card mt-4 text-sm"><b>{ans===q.a?'Correct. ':'Incorrect. '}</b>{q.e}</p>}
    <div className="mt-4 flex justify-between"><button className="btn btn-ghost" disabled={i===0} onClick={()=>setI(i-1)}>Previous</button>
      {i<qs.length-1 ? <button className="btn btn-primary" onClick={()=>setI(i+1)}>Next</button> : <button className="btn btn-primary" onClick={()=>setDone(true)}>Finish</button>}</div></div>)
}
