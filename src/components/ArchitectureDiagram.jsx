export function Sou2AIArchitecture({ copy }) {
  return (
    <figure className="architecture">
      <div className="diagram-sheet sou2ai-diagram-sheet">
        <div className="diagram-kicker eyebrow"><span>{copy.figure}</span><span dir="ltr">S2 / 02</span></div>
        <p className="diagram-title">{copy.diagramTitle}</p>

        {/* ── Desktop / tablet SVG ── */}
        <svg className="system-diagram sou2ai-system-diagram" viewBox="0 0 820 460" role="img" aria-labelledby="s2-title s2-desc" dir="ltr">
          <title id="s2-title">{copy.diagramAccessibleTitle}</title>
          <desc id="s2-desc">{copy.diagramDescription}</desc>

          <defs>
            <pattern id="sou2ai-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth=".4" opacity=".12"/>
            </pattern>
            <marker id="sarr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="4" markerHeight="4" orient="auto">
              <path d="M0 0L8 4L0 8z" fill="#8ab88a"/>
            </marker>
            <marker id="sarr-dim" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="4" markerHeight="4" orient="auto">
              <path d="M0 0L8 4L0 8z" fill="#8ab88a" opacity=".5"/>
            </marker>
          </defs>

          <rect width="820" height="460" fill="url(#sou2ai-grid)"/>

          {/* Layer tints */}
          <rect x="38" y="0" width="754" height="118" fill="currentColor" opacity=".025"/>
          <rect x="38" y="268" width="754" height="192" fill="currentColor" opacity=".02"/>

          {/* Left rail */}
          <line x1="38" y1="0" x2="38" y2="460" stroke="currentColor" strokeWidth=".6" opacity=".2"/>

          {/* Layer separators */}
          <line x1="38" y1="118" x2="782" y2="118" stroke="currentColor" strokeWidth=".6" strokeDasharray="4 5" opacity=".25"/>
          <line x1="38" y1="268" x2="782" y2="268" stroke="currentColor" strokeWidth=".6" strokeDasharray="4 5" opacity=".25"/>

          {/* Layer labels */}
          <text x="22" y="59" className="arch-layer-label" textAnchor="middle" transform="rotate(-90 22 59)">Client</text>
          <text x="22" y="193" className="arch-layer-label" textAnchor="middle" transform="rotate(-90 22 193)">Application</text>
          <text x="22" y="364" className="arch-layer-label" textAnchor="middle" transform="rotate(-90 22 364)">Data & AI</text>

          {/* ── CONNECTIONS ── */}

          {/* 1 · React ↔ FastAPI (REST) */}
          <path d="M410,110 L410,148" stroke="#8ab88a" strokeWidth="1" markerEnd="url(#sarr)" fill="none"/>
          <path d="M422,148 L422,110" stroke="#8ab88a" strokeWidth=".8" markerEnd="url(#sarr-dim)" fill="none" opacity=".45"/>
          <text x="430" y="132" className="arch-conn-label">REST API</text>

          {/* 2 · FastAPI → PostgreSQL (SQL + pgvector) */}
          <path d="M133,252 L133,296" stroke="#8ab88a" strokeWidth="1" markerEnd="url(#sarr)" fill="none"/>
          <text x="140" y="277" className="arch-conn-label">SQL · pgvector</text>

          {/* 3 · FastAPI → AI Providers (dashed — external API) */}
          <path d="M317,252 L317,296" stroke="#8ab88a" strokeWidth="1" markerEnd="url(#sarr)" fill="none" strokeDasharray="5 3"/>
          <text x="324" y="277" className="arch-conn-label">Embeds + Gen</text>

          {/* 4 · FastAPI → External DB (dashed — optional integration) */}
          <path d="M501,252 L501,296" stroke="#8ab88a" strokeWidth="1" markerEnd="url(#sarr)" fill="none" strokeDasharray="5 3"/>
          <text x="508" y="277" className="arch-conn-label">Read-only SQL</text>

          {/* 5 · FastAPI → Redis / Worker (async queue) */}
          <path d="M686,252 L686,296" stroke="#8ab88a" strokeWidth="1" markerEnd="url(#sarr)" fill="none"/>
          <text x="693" y="277" className="arch-conn-label">Async jobs</text>

          {/* ── NODES ── */}

          {/* React — full-width CLIENT row */}
          <g className="diagram-node">
            <rect x="46" y="36" width="728" height="74" rx="1"/>
            <text x="410" y="66" className="node-title" fontSize="20">React</text>
            <text x="410" y="88" className="node-description" fontSize="12">{copy.diagram.frontend}</text>
            <text x="758" y="50" className="arch-port-label" textAnchor="end">:5173</text>
          </g>

          {/* FastAPI — main highlighted node */}
          <g className="diagram-node diagram-node-main">
            <rect x="46" y="148" width="728" height="104" rx="1"/>
            <text x="410" y="182" className="node-title" fontSize="20">FastAPI</text>
            <text x="410" y="204" className="node-description" fontSize="12">{copy.diagram.backend}</text>
            <text x="410" y="224" className="node-description arch-subdesc" fontSize="11">JWT · Argon2 · Tenant-scoped · 20 k tokens/day</text>
            <text x="758" y="162" className="arch-port-label arch-port-dark" textAnchor="end">:8000</text>
          </g>

          {/* PostgreSQL 17 + pgvector */}
          <g className="diagram-node">
            <rect x="46" y="296" width="174" height="112" rx="1"/>
            <text x="133" y="328" className="node-title" fontSize="15">PostgreSQL 17</text>
            <text x="133" y="348" className="node-description arch-subdesc" fontSize="12">pgvector</text>
            <text x="133" y="366" className="node-description arch-subdesc" fontSize="11">1 024-dim vectors</text>
            <text x="133" y="383" className="node-description arch-subdesc" fontSize="11">Facts · Docs</text>
            <text x="133" y="399" className="node-description arch-subdesc" fontSize="10">:5433</text>
          </g>

          {/* AI Providers — split Gemini / Ollama */}
          <g className="diagram-node diagram-node-ai">
            <rect x="230" y="296" width="174" height="112" rx="1"/>
            {/* Internal divider */}
            <line x1="317" y1="298" x2="317" y2="406" stroke="#7aab76" strokeWidth=".6" strokeDasharray="3 2" opacity=".55"/>
            {/* Gemini half — center x=273, half-width=87 */}
            <text x="273" y="322" className="node-title" fontSize="13">Gemini</text>
            <text x="273" y="341" className="node-description arch-subdesc" fontSize="11">embed-001</text>
            <text x="273" y="358" className="node-description arch-subdesc" fontSize="11">Flash gen</text>
            <text x="273" y="375" className="node-description arch-subdesc" fontSize="10">external API</text>
            {/* Ollama half — center x=362, half-width=87 */}
            <text x="362" y="322" className="node-title" fontSize="13">Ollama</text>
            <text x="362" y="341" className="node-description arch-subdesc" fontSize="11">Qwen2.5 7B</text>
            <text x="362" y="358" className="node-description arch-subdesc" fontSize="11">local infer.</text>
            <text x="362" y="375" className="node-description arch-subdesc" fontSize="10">opt · :11434</text>
          </g>

          {/* External Database (read-only operational data) */}
          <g className="diagram-node">
            <rect x="414" y="296" width="174" height="112" rx="1"/>
            <text x="501" y="322" className="node-title" fontSize="15">Ext. Database</text>
            <text x="501" y="342" className="node-description arch-subdesc" fontSize="11">Products · Sales</text>
            <text x="501" y="359" className="node-description arch-subdesc" fontSize="11">Read-only SQL</text>
            <text x="501" y="376" className="node-description arch-subdesc" fontSize="11">No model writes</text>
            <text x="501" y="393" className="node-description arch-subdesc" fontSize="10">:5434</text>
          </g>

          {/* Redis + RQ Worker */}
          <g className="diagram-node">
            <rect x="598" y="296" width="176" height="112" rx="1"/>
            <text x="686" y="322" className="node-title" fontSize="15">Redis + RQ</text>
            <text x="686" y="342" className="node-description arch-subdesc" fontSize="11">Async worker</text>
            <text x="686" y="359" className="node-description arch-subdesc" fontSize="11">Doc embedding</text>
            <text x="686" y="376" className="node-description arch-subdesc" fontSize="11">Summaries</text>
            <text x="686" y="393" className="node-description arch-subdesc" fontSize="10">:6379</text>
          </g>

          {/* Deployment strip */}
          <line x1="46" y1="425" x2="774" y2="425" stroke="currentColor" strokeWidth=".6" opacity=".2"/>
          <text x="50" y="441" className="arch-deploy-label" textAnchor="start">{copy.deployment}</text>
          <text x="774" y="441" className="arch-deploy-label" textAnchor="end" dir="ltr">Docker Compose · Local · Cloud-ready (M20)</text>
        </svg>

        {/* ── Mobile diagram ── */}
        <div className="mobile-diagram" role="img" aria-label={copy.diagramDescription}>
          <div className="mobile-node mobile-frontend">
            <bdi lang="en">React</bdi>
            <span>{copy.diagram.frontend}</span>
          </div>
          <div className="mobile-services">
            <p>Application</p>
            <div className="mobile-node mobile-api"><bdi lang="en">FastAPI</bdi><span>{copy.diagram.backend}</span></div>
          </div>
          <div className="mobile-services">
            <p>{copy.diagram.services}</p>
            <div className="mobile-node mobile-ai-node"><bdi lang="en">PostgreSQL 17</bdi><span>{copy.diagram.postgres}</span></div>
            <div className="mobile-node mobile-ai-node"><bdi lang="en">Gemini + Ollama</bdi><span>{copy.diagram.ai}</span></div>
            <div className="mobile-node"><bdi lang="en">Ext. Database</bdi><span>{copy.diagram.external}</span></div>
            <div className="mobile-node"><bdi lang="en">Redis + RQ</bdi><span>{copy.diagram.worker}</span></div>
          </div>
        </div>
      </div>
      <figcaption>
        <span>{copy.figureCaption}</span>
        <span className="caption-number" aria-hidden="true">[ 02 ]</span>
      </figcaption>
    </figure>
  )
}

export default function ArchitectureDiagram({ copy }) {
  return (
    <figure className="architecture">
      <div className="diagram-sheet">
        <div className="diagram-kicker eyebrow"><span>{copy.figure}</span><span dir="ltr">PC / 01</span></div>
        <p className="diagram-title">{copy.diagramTitle}</p>

        {/* ── Desktop / tablet SVG ── */}
        <svg className="system-diagram" viewBox="0 0 800 490" role="img" aria-labelledby="diag-title diag-desc" dir="ltr">
          <title id="diag-title">{copy.diagramAccessibleTitle}</title>
          <desc id="diag-desc">{copy.diagramDescription}</desc>

          <defs>
            <pattern id="arch-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth=".4" opacity=".15"/>
            </pattern>
            <marker id="arr" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="4" markerHeight="4" orient="auto">
              <path d="M0 0L8 4L0 8z" fill="#c1a4a2"/>
            </marker>
            <marker id="arr-dim" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="4" markerHeight="4" orient="auto">
              <path d="M0 0L8 4L0 8z" fill="#c1a4a2" opacity=".5"/>
            </marker>
          </defs>

          {/* Background */}
          <rect width="800" height="490" fill="url(#arch-grid)"/>

          {/* Subtle layer tints */}
          <rect x="38" y="0" width="754" height="130" fill="currentColor" opacity=".03"/>
          <rect x="38" y="280" width="754" height="210" fill="currentColor" opacity=".025"/>

          {/* Left rail */}
          <line x1="38" y1="0" x2="38" y2="490" stroke="currentColor" strokeWidth=".6" opacity=".2"/>

          {/* Layer separator dashes */}
          <line x1="38" y1="130" x2="762" y2="130" stroke="currentColor" strokeWidth=".6" strokeDasharray="4 5" opacity=".25"/>
          <line x1="38" y1="280" x2="762" y2="280" stroke="currentColor" strokeWidth=".6" strokeDasharray="4 5" opacity=".25"/>

          {/* Layer labels — rotated against left rail */}
          <text x="22" y="65" className="arch-layer-label" textAnchor="middle" transform="rotate(-90 22 65)">Client</text>
          <text x="22" y="205" className="arch-layer-label" textAnchor="middle" transform="rotate(-90 22 205)">Application</text>
          <text x="22" y="380" className="arch-layer-label" textAnchor="middle" transform="rotate(-90 22 380)">Data / AI</text>

          {/* ── CONNECTIONS ── */}

          {/* 1 · React → Laravel  REST (down + return) */}
          <path d="M207 113 L207 160" stroke="#c1a4a2" strokeWidth="1" markerEnd="url(#arr)" fill="none"/>
          <path d="M218 160 L218 113" stroke="#c1a4a2" strokeWidth=".8" markerEnd="url(#arr-dim)" fill="none" opacity=".45"/>
          <text x="232" y="142" className="arch-conn-label">REST API</text>

          {/* 2 · React → Reverb  WebSocket (dashed) */}
          <path d="M579 113 L579 160" stroke="#c1a4a2" strokeWidth="1" markerEnd="url(#arr)" fill="none" strokeDasharray="5 3"/>
          <text x="593" y="142" className="arch-conn-label">WebSocket</text>

          {/* 3 · Laravel ↔ Reverb  Broadcast events */}
          <path d="M373 207 L402 207" stroke="#c1a4a2" strokeWidth="1" markerEnd="url(#arr)" fill="none"/>
          <path d="M402 216 L373 216" stroke="#c1a4a2" strokeWidth=".8" markerEnd="url(#arr-dim)" fill="none" opacity=".45"/>
          <text x="381" y="200" className="arch-conn-label">Events</text>

          {/* 4 · Laravel → PostgreSQL  SQL (straight down) */}
          <path d="M140 251 L140 304" stroke="#c1a4a2" strokeWidth="1" markerEnd="url(#arr)" fill="none"/>
          <text x="152" y="280" className="arch-conn-label">SQL</text>

          {/* 5 · Laravel → Redis  Cache (elbow y=270) */}
          <path d="M220 251 L220 270 L332 270 L332 304" stroke="#c1a4a2" strokeWidth="1" markerEnd="url(#arr)" fill="none"/>
          <text x="232" y="264" className="arch-conn-label">Cache</text>

          {/* 6 · Laravel → FastAPI AI  (elbow y=263, dashed) */}
          <path d="M373 215 L373 263 L622 263 L622 304" stroke="#c1a4a2" strokeWidth="1" markerEnd="url(#arr)" fill="none" strokeDasharray="5 3"/>
          <text x="502" y="257" className="arch-conn-label">AI Analysis</text>

          {/* 7 · Reverb → Redis  Pub/Sub (elbow y=257, dashed) */}
          <path d="M488 251 L488 257 L392 257 L392 304" stroke="#c1a4a2" strokeWidth="1" markerEnd="url(#arr)" fill="none" strokeDasharray="5 3"/>
          <text x="438" y="251" className="arch-conn-label">Pub/Sub</text>

          {/* ── NODES ── */}

          {/* React — full-width CLIENT row */}
          <g className="diagram-node">
            <rect x="48" y="37" width="706" height="76" rx="1"/>
            <text x="401" y="66" className="node-title" fontSize="20">React</text>
            <text x="401" y="88" className="node-description" fontSize="12">{copy.diagram.frontend}</text>
            <text x="740" y="51" className="arch-port-label" textAnchor="end">:3000</text>
          </g>

          {/* Laravel — main highlighted */}
          <g className="diagram-node diagram-node-main">
            <rect x="48" y="160" width="325" height="91" rx="1"/>
            <text x="210" y="192" className="node-title" fontSize="20">Laravel</text>
            <text x="210" y="213" className="node-description" fontSize="12">{copy.diagram.api}</text>
            <text x="210" y="231" className="node-description arch-subdesc" fontSize="11">Google OAuth · Sanctum · RBAC</text>
            <text x="358" y="174" className="arch-port-label arch-port-dark" textAnchor="end">:8080</text>
          </g>

          {/* Reverb WebSocket */}
          <g className="diagram-node">
            <rect x="402" y="160" width="358" height="91" rx="1"/>
            <text x="581" y="192" className="node-title" fontSize="20">Reverb</text>
            <text x="581" y="213" className="node-description" fontSize="12">{copy.diagram.reverb}</text>
            <text x="581" y="231" className="node-description arch-subdesc" fontSize="11">user · rehab-plan · clinic · admin</text>
            <text x="744" y="174" className="arch-port-label" textAnchor="end">:9000</text>
          </g>

          {/* PostgreSQL */}
          <g className="diagram-node">
            <rect x="48" y="304" width="208" height="88" rx="1"/>
            <text x="152" y="336" className="node-title" fontSize="17">PostgreSQL</text>
            <text x="152" y="356" className="node-description" fontSize="12">{copy.diagram.data}</text>
            <text x="152" y="374" className="node-description arch-subdesc" fontSize="10">:5432</text>
          </g>

          {/* Redis */}
          <g className="diagram-node">
            <rect x="276" y="304" width="208" height="88" rx="1"/>
            <text x="380" y="336" className="node-title" fontSize="17">Redis 7</text>
            <text x="380" y="356" className="node-description" fontSize="12">{copy.diagram.redis}</text>
            <text x="380" y="374" className="node-description arch-subdesc" fontSize="10">:6379</text>
          </g>

          {/* FastAPI AI — distinct stroke */}
          <g className="diagram-node diagram-node-ai">
            <rect x="504" y="304" width="256" height="88" rx="1"/>
            <text x="632" y="332" className="node-title" fontSize="17">FastAPI</text>
            <text x="632" y="352" className="node-description" fontSize="12">AI Service</text>
            <text x="632" y="372" className="node-description arch-subdesc" fontSize="11">{copy.diagram.ai}</text>
          </g>

          {/* Deployment strip */}
          <line x1="48" y1="416" x2="760" y2="416" stroke="currentColor" strokeWidth=".6" opacity=".25"/>
          <text x="52" y="432" className="arch-deploy-label" textAnchor="start">{copy.deployment}</text>
          <text x="760" y="432" className="arch-deploy-label" textAnchor="end" dir="ltr">Vercel + Railway · Docker</text>
        </svg>

        {/* ── Mobile diagram ── */}
        <div className="mobile-diagram" role="img" aria-label={copy.diagramDescription}>
          <div className="mobile-node mobile-frontend">
            <bdi lang="en">React</bdi>
            <span>{copy.diagram.frontend}</span>
          </div>
          <div className="mobile-services">
            <p>{copy.diagram.services}</p>
            <div className="mobile-node mobile-api"><bdi lang="en">Laravel</bdi><span>{copy.diagram.api}</span></div>
            <div className="mobile-node"><bdi lang="en">Reverb WS</bdi><span>{copy.diagram.reverb}</span></div>
            <div className="mobile-node mobile-ai-node"><bdi lang="en">FastAPI AI</bdi><span>{copy.diagram.ai}</span></div>
            <div className="mobile-node"><bdi lang="en">PostgreSQL</bdi><span>{copy.diagram.data}</span></div>
            <div className="mobile-node"><bdi lang="en">Redis</bdi><span>{copy.diagram.redis}</span></div>
          </div>
        </div>
      </div>
      <figcaption>
        <span>{copy.figureCaption}</span>
        <span className="caption-number" aria-hidden="true">[ 01 ]</span>
      </figcaption>
    </figure>
  )
}
