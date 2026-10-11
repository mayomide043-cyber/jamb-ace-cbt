import { useLocation, Link } from 'react-router-dom'
export default function ComingSoon({ stage }) {
  const { pathname } = useLocation()
  return <div className="mx-auto max-w-xl px-4 py-16 text-center"><h1 className="text-2xl font-bold">{pathname}</h1><p className="mt-2">This page is built in {stage}. It needs the backend and database.</p><Link to="/" className="btn btn-primary mt-4">Back home</Link></div>
}
