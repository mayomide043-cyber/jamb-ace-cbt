import { Link } from 'react-router-dom'
import { Monitor, FileText, CalendarCheck, Timer, Zap, BarChart3, BookOpen, Target } from 'lucide-react'
import { subjects } from '../data/subjects.js'
import { sampleQuestions } from '../data/sampleQuestions.js'
const features = [[Monitor,'Realistic CBT Simulation'],[FileText,'Past Questions'],[CalendarCheck,'Daily Practice'],[Timer,'Mock Examinations'],[Zap,'Instant Results'],[BarChart3,'Performance Analytics'],[BookOpen,'Study Resources'],[Target,'Personalised Revision']]
const steps = ['Create an account.','Choose your subjects.','Practise questions or take a mock exam.','Review your results.','Improve your performance.']
const faqs = [['Are these official JAMB questions?','No. Sample questions are original practice items. A question is only labelled official once its source is verified.'],['Is my practice score my JAMB score?','No. It is a practice estimate and not an official result.'],['Does it work on mobile data?','Yes. The app uses no heavy images or web fonts.']]
export default function Home() {
  return (<>
  <section className="bg-gradient-to-b from-ace-50 to-white dark:from-navy-800 dark:to-navy-900"><div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
    <div><h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Your JAMB Success Starts Here.</h1>
      <p className="mt-4 max-w-prose text-lg text-slate-600 dark:text-slate-300">Prepare smarter with realistic CBT practice, past questions, timed mock examinations, and detailed performance analysis.</p>
      <div className="mt-6 flex flex-wrap gap-3"><Link to="/practice" className="btn btn-primary">Start Practising</Link><Link to="/mock-exams" className="btn btn-ghost">Take a Mock Exam</Link><Link to="/past-questions" className="btn btn-ghost">Explore Past Questions</Link></div></div>
    <div className="card" aria-label="Dashboard preview (demo data)"><p className="mb-3 text-xs font-semibold text-slate-500">Dashboard preview, demo data</p>
      <div className="grid grid-cols-3 gap-3 text-center">{[['Accuracy','72%'],['Streak','5 days'],['Mock score','268/400']].map(([l,v])=><div key={l} className="rounded-xl bg-ace-50 p-3 dark:bg-navy-900"><div className="text-xl font-bold text-ace-700 dark:text-ace-500">{v}</div><div className="text-xs">{l}</div></div>)}</div>
      <div className="mt-4 space-y-2">{[['Biology',80],['Mathematics',65],['Physics',55]].map(([s,v])=><div key={s}><div className="flex justify-between text-xs"><span>{s}</span><span>{v}%</span></div><div className="h-2 rounded bg-slate-200 dark:bg-slate-700"><div className="h-2 rounded bg-ace-600" style={{width:v+'%'}}/></div></div>)}</div></div>
  </div></section>
  <section className="mx-auto max-w-6xl px-4 py-10"><div className="grid grid-cols-2 gap-4 md:grid-cols-4">
    {[['Practice questions in this build',sampleQuestions.length],['Subjects covered',subjects.length]].map(([l,v])=><div key={l} className="card text-center"><div className="text-3xl font-extrabold text-ace-600">{v}</div><div className="text-sm">{l}</div></div>)}
    {['Mock exams completed','Active students'].map(l=><div key={l} className="card text-center"><div className="text-3xl font-extrabold text-slate-400">n/a</div><div className="text-sm">{l} (available once the Stage 3 database is live)</div></div>)}</div></section>
  <section className="mx-auto max-w-6xl px-4 py-10"><h2 className="text-2xl font-bold">Everything you need to practise</h2>
    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(([I,t])=><div key={t} className="card"><I className="text-ace-600" aria-hidden="true"/><h3 className="mt-2 font-semibold">{t}</h3></div>)}</div></section>
  <section className="mx-auto max-w-6xl px-4 py-10"><h2 className="text-2xl font-bold">How it works</h2>
    <ol className="mt-5 grid gap-3 md:grid-cols-5">{steps.map((s,i)=><li key={s} className="card"><span className="font-bold text-ace-600">Step {i+1}</span><p className="mt-1 text-sm">{s}</p></li>)}</ol></section>
  <section className="mx-auto max-w-6xl px-4 py-10"><h2 className="text-2xl font-bold">Featured subjects</h2>
    <div className="mt-5 flex flex-wrap gap-2">{subjects.slice(0,8).map(s=><Link key={s.id} to={'/subjects/'+s.id} className="btn btn-ghost">{s.name}</Link>)}</div></section>
  <section className="bg-navy-900 py-12 text-center text-white"><h2 className="text-2xl font-bold">Ready to beat the clock?</h2><Link to="/practice" className="btn btn-primary mt-4">Start Practising</Link></section>
  <section className="mx-auto max-w-3xl px-4 py-12"><h2 className="text-2xl font-bold">Frequently asked questions</h2>
    {faqs.map(([q,a])=><details key={q} className="card mt-3"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-2 text-sm">{a}</p></details>)}</section></>)
}
