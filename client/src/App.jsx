import { Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Subjects from './pages/Subjects.jsx'
import SubjectDetail from './pages/SubjectDetail.jsx'
import Practice from './pages/Practice.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
const later = [['/past-questions','Stage 2'],['/mock-exams','Stage 2'],['/resources','Stage 4'],['/leaderboard','Stage 5'],['/login','Stage 3'],['/register','Stage 3'],['/forgot-password','Stage 3'],['/dashboard','Stage 3'],['/analytics','Stage 3'],['/study-plan','Stage 5'],['/profile','Stage 3'],['/settings','Stage 3'],['/about','the Stage 1 content pass'],['/contact','the Stage 1 content pass'],['/privacy','the Stage 1 content pass'],['/terms','the Stage 1 content pass']]
export default function App() {
  return (<Routes><Route element={<Layout />}>
    <Route index element={<Home />} /><Route path="subjects" element={<Subjects />} /><Route path="subjects/:subjectId" element={<SubjectDetail />} /><Route path="practice" element={<Practice />} />
    {later.map(([p, s]) => <Route key={p} path={p.slice(1)} element={<ComingSoon stage={s} />} />)}
    <Route path="*" element={<div className="p-16 text-center">Page not found. <Link className="underline" to="/">Go home</Link></div>} />
  </Route></Routes>)
}
