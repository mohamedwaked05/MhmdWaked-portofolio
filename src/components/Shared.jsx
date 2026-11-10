import { profile } from '../content'

export function Arrow({ diagonal = false, className = '' }) {
  return (
    <svg className={`arrow ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h15m-6-6 6 6-6 6'} />
    </svg>
  )
}

export function ExternalLink({ href, children, className = '' }) {
  return <a className={`external-link ${className}`} href={href} target="_blank" rel="noopener noreferrer">{children}<Arrow diagonal /></a>
}

export function CvLinks({ copy }) {
  if (!profile.cvUrl) return null

  return (
    <div className="cv-links" role="group" aria-label={copy.cvActions}>
      <ExternalLink href={profile.cvUrl} className="cv-view">{copy.viewCv}</ExternalLink>
      <a href={profile.cvUrl} download="Mohamad-Khaled-Waked-CV.pdf" className="cv-download">{copy.downloadCv}<span aria-hidden="true">↓</span></a>
    </div>
  )
}

export function ProjectFacts({ copy, inDevelopment = false }) {
  return (
    <dl className="project-facts">
      <div><dt>{copy.roleLabel}</dt><dd>{copy.role}</dd></div>
      <div><dt>{copy.statusLabel}</dt><dd className={`project-status ${inDevelopment ? 'in-development' : 'completed'}`}><span aria-hidden="true" />{copy.status}</dd></div>
    </dl>
  )
}

export function TechnicalNote({ label, technologies }) {
  return (
    <div className="technical-note">
      <span className="eyebrow">{label}</span>
      <ul aria-label={label}>{technologies.map(technology => <li key={technology}><bdi lang="en" dir="ltr">{technology}</bdi></li>)}</ul>
    </div>
  )
}
