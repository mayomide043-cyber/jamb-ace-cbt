import { Link, useParams } from 'react-router-dom'
import { subjects } from '../data/subjects.js'
import { count } from './Subjects.jsx'
export default function SubjectDetail() {
  const { subjectId } = useParams(); const s = subjects.find(x => x.id === subjectId)
  if (!s) return <div className="p-10 text-center">Subject not found. <Link className="underline" to="/subjects">Back to subjects</Link></div>
  return (<div className="mx-auto max-w-4xl px-4 py-10"><h1 className="text-3xl font-bold">{s.name}</h1><p className="mt-2">{s.description}</p>
    <p className="mt-2 text-sm">{count(s.id)} practice questions available</p>
    <h2 className="mt-6 font-semibold">Topics</h2><ul className="mt-2 flex flex-wrap gap-2">{s.topics.map(t=><li key={t} className="rounded-full bg-ace-50 px-3 py-1 text-sm dark:bg-navy-800">{t}</li>)}</ul>
    <Link to={'/practice?subject='+s.id} className="btn btn-primary mt-6">Practise {s.name}</Link></div>)
}
