import { profile } from '../content'
import { Arrow, CvLinks } from './Shared'

function ContactRow({ label, value, href, external = false }) {
  const externalAttributes = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <li>
      <a href={href} {...externalAttributes}>
        <span className="contact-label">{label}</span>
        <span className="contact-value"><bdi dir="ltr">{value}</bdi></span>
        <Arrow diagonal={external} />
      </a>
    </li>
  )
}

export default function Contact({ copy, shared }) {
  return (
    <section id="correspondence" className="correspondence" aria-labelledby="contact-heading">
      <div className="page-width">
        <div className="section-heading"><h2 id="contact-heading"><span className="section-number" aria-hidden="true">02 /</span>{copy.sectionTitle}</h2><span className="eyebrow">{copy.sectionNote}</span></div>
        <div className="contact-grid">
          <div className="contact-introduction">
            <p className="contact-headline">{copy.headline}</p>
            <p>{copy.introduction}</p>
            <p className="contact-location"><span className="eyebrow">{copy.locationLabel}</span>{shared.location}</p>
            <CvLinks copy={shared} />
          </div>
          <ul className="contact-list">
            <ContactRow label={copy.email} value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow label={copy.phone} value={profile.phone} href={profile.telephone} />
            <ContactRow label={copy.whatsapp} value={profile.phone} href={profile.whatsapp} external />
            <ContactRow label={copy.linkedin} value="linkedin.com/in/mohamad-waked" href={profile.linkedin} external />
            <ContactRow label={copy.github} value="github.com/mohamedwaked05" href={profile.github} external />
          </ul>
        </div>
      </div>
    </section>
  )
}
