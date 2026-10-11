import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Moon, Sun } from 'lucide-react'
import Logo from './Logo.jsx'
const links = [['/','Home'],['/practice','Practice CBT'],['/past-questions','Past Questions'],['/mock-exams','Mock Exams'],['/subjects','Subjects'],['/resources','Study Resources'],['/leaderboard','Leaderboard']]
export default function Layout() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('theme', dark ? 'dark' : 'light') }, [dark])
  const cls = ({ isActive }) => `rounded-lg px-3 py-2 text-sm font-medium ${isActive ? 'bg-ace-50 text-ace-700 dark:bg-navy-800 dark:text-ace-500' : 'hover:bg-slate-100 dark:hover:bg-navy-800'}`
  return (<div className="flex min-h-screen flex-col">
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-700 dark:bg-navy-900/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3" aria-label="Main">
        <Link to="/" aria-label="JAMB ACE CBT home"><Logo /></Link>
        <div className="hidden items-center gap-1 lg:flex">{links.map(([to, t]) => <NavLink key={to} to={to} end={to === '/'} className={cls}>{t}</NavLink>)}</div>
        <div className="flex items-center gap-2">
          <button className="btn btn-ghost !px-3" onClick={() => setDark(!dark)} aria-label="Toggle dark theme">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <Link to="/login" className="btn btn-primary hidden sm:inline-flex">Login / Register</Link>
          <button className="btn btn-ghost !px-3 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>{open ? <X size={18}/> : <Menu size={18}/>}</button>
        </div>
      </nav>
      {open && <div className="flex flex-col gap-1 border-t border-slate-200 p-3 dark:border-slate-700 lg:hidden" onClick={() => setOpen(false)}>
        {links.map(([to, t]) => <NavLink key={to} to={to} end={to === '/'} className={cls}>{t}</NavLink>)}<NavLink to="/login" className={cls}>Login / Register</NavLink></div>}
    </header>
    <main className="flex-1"><Outlet /></main>
    <footer className="bg-navy-900 text-slate-300"><div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-3">
      <div><Logo className="text-white"/><p className="mt-2 text-sm">Practice Smart. Beat the Clock. Ace Your JAMB.</p></div>
      <div className="flex flex-col gap-1 text-sm"><Link to="/about">About</Link><Link to="/contact">Contact</Link><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Service</Link></div>
      <p className="text-xs">JAMB ACE CBT is an independent practice platform and is not affiliated with JAMB. Practice questions are original unless labelled as verified official. Practice scores are estimates, not official JAMB scores.</p>
    </div></footer></div>)
}
