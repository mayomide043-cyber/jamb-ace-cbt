export default function Logo({ className = '' }) {
  return (<span className={`inline-flex items-center gap-2 font-extrabold ${className}`}>
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#0e8a4a"/><path d="M9 17l5 5 9-12" stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
    <span>JAMB <span className="text-ace-600">ACE</span> CBT</span></span>)
}
