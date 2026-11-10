import { profile } from '../content'
import ArchitectureDiagram, { Sou2AIArchitecture } from './ArchitectureDiagram'
import { ExternalLink, ProjectFacts, TechnicalNote } from './Shared'

const physioTechnologies = ['Laravel', 'React', 'FastAPI / Python', 'PostgreSQL', 'Redis', 'Docker']
const sou2aiTechnologies = ['Python', 'FastAPI', 'React', 'PostgreSQL / pgvector', 'SQL Server', 'Redis', 'Gemini', 'Docker']

export function PhysioCore({ copy }) {
  return (
    <article id="physiocore" className="project project-physiocore" aria-labelledby="physiocore-title">
      <div className="page-width">
        <div className="project-grid">
          <div className="project-intro">
            <p className="project-category eyebrow">{copy.category}</p>
            <h3 id="physiocore-title" dir="ltr">PhysioCore<span className="project-period">.</span></h3>
            <p className="project-subtitle">{copy.subtitle}</p>
            <p className="project-summary">{copy.summary}</p>
            <ProjectFacts copy={copy} />
            <ExternalLink href={profile.physiocore} className="project-live">{copy.visit}</ExternalLink>
          </div>
          <ArchitectureDiagram copy={copy} />
        </div>
        <details className="product-preview">
          <summary>{copy.screenshotLabel}<span aria-hidden="true">+</span></summary>
          <figure>
            <img src="/images/physiocore-home.jpg" alt={copy.screenshotAlt} width="1914" height="852" loading="lazy" decoding="async" />
            <figcaption>{copy.screenshotCaption}</figcaption>
          </figure>
        </details>
        <div className="project-story">
          {copy.story.map((item, index) => (
            <section className="story-part" key={item.key} aria-labelledby={`physio-${item.key}`}>
              <span className="story-index" aria-hidden="true">0{index + 1}</span>
              <div><h4 id={`physio-${item.key}`}>{item.title}</h4><p>{item.body}</p></div>
            </section>
          ))}
        </div>
        <TechnicalNote label={copy.builtWith} technologies={physioTechnologies} />
      </div>
    </article>
  )
}

function AnswerWorkflow({ copy }) {
  return (
    <figure className="answer-workflow">
      <div className="workflow-sheet">
        <p className="eyebrow">{copy.figure}</p>
        <p className="workflow-title">{copy.diagramTitle}</p>
        <ol className="workflow-steps">
          {copy.flow.map((step, index) => (
            <li key={step.key}>
              <span className="workflow-number" aria-hidden="true">0{index + 1}</span>
              <div><p className="workflow-step-title">{step.title}</p><p className="workflow-step-body">{step.body}</p></div>
            </li>
          ))}
        </ol>
      </div>
      <figcaption>{copy.figureCaption}</figcaption>
    </figure>
  )
}

export function Sou2AI({ copy }) {
  return (
    <article id="sou2ai" className="project project-sou2ai" aria-labelledby="sou2ai-title">
      <div className="page-width">
        <div className="project-grid sou2ai-grid">
          <div className="project-intro">
            <p className="project-category eyebrow">{copy.category}</p>
            <h3 id="sou2ai-title" dir="ltr">Sou2AI<span className="project-period">.</span></h3>
            <p className="project-subtitle">{copy.subtitle}</p>
            <p className="project-summary">{copy.summary}</p>
            <ProjectFacts copy={copy} inDevelopment />
          </div>
          <Sou2AIArchitecture copy={copy} />
        </div>
        <div className="sou2ai-details">
          <section className="capabilities" aria-labelledby="capabilities-heading">
            <h4 id="capabilities-heading" className="detail-heading">{copy.capabilitiesTitle}</h4>
            <dl className="capability-list">
              {copy.capabilities.map((capability, index) => (
                <div key={capability.key}>
                  <dt><span className="story-index" aria-hidden="true">0{index + 1}</span><span>{capability.title}</span></dt>
                  <dd><p className="technical-caption">{capability.term}</p><p>{capability.body}</p></dd>
                </div>
              ))}
            </dl>
          </section>
          <div className="development-notes">
            <section aria-labelledby="sou2ai-contribution"><h4 id="sou2ai-contribution">{copy.contributionTitle}</h4><p>{copy.contribution}</p></section>
            <section aria-labelledby="sou2ai-implementation"><h4 id="sou2ai-implementation">{copy.implementationTitle}</h4><p>{copy.implementation}</p></section>
            <section className="development-status" aria-labelledby="sou2ai-progress"><h4 id="sou2ai-progress">{copy.progressTitle}</h4><p>{copy.progress}</p></section>
          </div>
        </div>
        <TechnicalNote label={copy.builtWith} technologies={sou2aiTechnologies} />
      </div>
    </article>
  )
}
