import { useEffect, useState } from 'react'
import { content, profile } from './content'
import Contact from './components/Contact'
import { PhysioCore, Sou2AI, FixBeitak } from './components/Projects'
import { Arrow, CvLinks } from './components/Shared'
import './App.css'

const languageKey = 'mkw-portfolio-language-v1'

function initialLanguage() {
  try {
    return localStorage.getItem(languageKey) === 'ar' ? 'ar' : 'en'
  } catch {
    return 'en'
  }
}

function Header({ language, setLanguage, copy }) {
  return (
    <header className="site-header page-width">
      <a href="#top" className="identity" aria-label={copy.home}>
        <span className="monogram" aria-hidden="true">mw<span>.</span></span>
        <span className="identity-name">{copy.name}</span>
      </a>
      <nav aria-label={copy.navigation}>
        <a href="#selected-work" className="nav-work">{copy.work}</a>
        <a href="#correspondence">{copy.contactNav}<Arrow diagonal /></a>
        <div className="language-switch" role="group" aria-label={copy.language} dir="ltr">
          <button type="button" lang="en" aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN<span className="sr-only"> — English</span></button>
          <span className="language-divider" aria-hidden="true" />
          <button type="button" lang="ar" aria-pressed={language === 'ar'} onClick={() => setLanguage('ar')}>العربية</button>
        </div>
      </nav>
    </header>
  )
}

function Introduction({ copy }) {
  return (
    <section className="introduction page-width" aria-labelledby="intro-heading">
      <div className="edition-row eyebrow"><span>{copy.edition}</span><span>{copy.location}</span></div>
      <div className="intro-grid">
        <div className="intro-title">
          <div className="tagline-stack">
            <p className="eyebrow tagline-primary"><span className="small-cross" aria-hidden="true">+</span>{copy.taglines[0]}</p>
            <p className="eyebrow tagline-secondary">{copy.taglines[1]}</p>
            <p className="eyebrow tagline-secondary">{copy.taglines[2]}</p>
          </div>
          <h1 id="intro-heading">{copy.headline[0]}<br /><em>{copy.headline[1]}</em><br />{copy.headline[2]}<span className="headline-stop">.</span></h1>
        </div>
        <div className="intro-aside">
          <img src={`${import.meta.env.BASE_URL}personalpic/moewaked.jpeg`} alt={copy.photoAlt} className="profile-photo" />
          <span className="aside-rule" aria-hidden="true" />
          <p className="intro-greeting">{copy.greeting}</p>
          <div className="intro-description"><p>{copy.introduction}</p><p>{copy.introductionDetails}</p></div>
          <a className="primary-link" href="#selected-work">{copy.explore}<Arrow /></a>
          <a className="intro-email" href={`mailto:${profile.email}`}>{copy.emailAction}<Arrow diagonal /></a>
          <CvLinks copy={copy} />
          <p className="aside-note">{copy.focus}</p>
        </div>
      </div>
      <div className="intro-bottom"><span className="eyebrow">{copy.approach}</span><a href="#selected-work" className="scroll-link"><span>{copy.scroll}</span><span aria-hidden="true">↓</span></a></div>
    </section>
  )
}

function SelectedWork({ copy }) {
  return (
    <section id="selected-work" className="selected-work" aria-labelledby="work-heading">
      <div className="work-overview page-width">
        <div className="section-heading"><h2 id="work-heading"><span className="section-number" aria-hidden="true">01 /</span>{copy.project.sectionTitle}</h2><span className="eyebrow">{copy.project.sectionNote}</span></div>
        <nav className="project-index" aria-label={copy.workIndex}>
          <a href="#physiocore"><span aria-hidden="true">01</span><bdi lang="en">PhysioCore</bdi><span className="index-status">{copy.project.status}</span><Arrow diagonal /></a>
          <a href="#sou2ai"><span aria-hidden="true">02</span><bdi lang="en">Sou2AI</bdi><span className="index-status">{copy.sou2ai.status}</span><Arrow diagonal /></a>
          <a href="#fixbeitak"><span aria-hidden="true">03</span><bdi lang="en">Fix Beitak</bdi><span className="index-status">{copy.fixbeitak.status}</span><Arrow diagonal /></a>
        </nav>
      </div>
      <PhysioCore copy={copy.project} />
      <Sou2AI copy={copy.sou2ai} />
      <FixBeitak copy={copy.fixbeitak} />
    </section>
  )
}

function Footer({ copy }) {
  return (
    <footer className="site-footer page-width">
      <span>{copy.name}<span className="footer-dot" aria-hidden="true"> / </span><span className="footer-title">{copy.title}</span></span>
      <a href={`mailto:${profile.email}`}><bdi dir="ltr">{profile.email}</bdi><Arrow diagonal /></a>
      <a href="#top" className="back-to-top">{copy.backToTop}<span aria-hidden="true">↑</span></a>
    </footer>
  )
}

export default function App() {
  const [language, setLanguage] = useState(initialLanguage)
  const copy = content[language]

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.title = copy.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', copy.meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', copy.meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', copy.meta.description)
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', language === 'ar' ? 'ar_LB' : 'en_US')
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', copy.meta.title)
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', copy.meta.description)
    try { localStorage.setItem(languageKey, language) } catch { /* The switch also works with browser storage disabled. */ }
  }, [language, copy])

  return (
    <>
      <a className="skip-link" href="#main">{copy.skip}</a>
      <div id="top" />
      <Header language={language} setLanguage={setLanguage} copy={copy} />
      <main id="main" tabIndex={-1}>
        <Introduction copy={copy} />
        <SelectedWork copy={copy} />
        <Contact copy={copy.contact} shared={copy} />
      </main>
      <Footer copy={copy} />
    </>
  )
}
