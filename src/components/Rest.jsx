import { Check } from './Icons.jsx';

const STARS = [
  [40, 40, 1.6, 0], [110, 90, 1.2, 1], [180, 30, 1.8, 2], [250, 70, 1.2, 0.5], [330, 28, 1.6, 1.5],
  [400, 80, 1.4, 2.5], [470, 36, 1.8, 0.8], [540, 70, 1.3, 1.8], [80, 150, 1.2, 2.2], [220, 130, 1.5, 0.3],
  [520, 140, 1.4, 1.2], [360, 140, 1.2, 2.8], [580, 22, 1.2, 0.6], [20, 100, 1.4, 1.4],
];

const TAGS = [
  { x: '58%', y: '38%', text: 'Sábado 09:30, cita reservada' },
  { x: '68%', y: '26%', text: 'Domingo 13:00, cita reservada' },
  { x: '54%', y: '24%', text: '23:47, cita reservada' },
  { x: '64%', y: '34%', text: '03:12, consulta respondida' },
];

function Bill() {
  return (
    <g>
      <rect x="-13" y="-7" width="26" height="14" rx="2.5" fill="#6fcf97" stroke="#2f8f5f" strokeWidth="1.5" />
      <circle r="3.8" fill="#2f8f5f" opacity=".5" />
      <text y="2.3" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#17613c" fontFamily="'Bricolage Grotesque', sans-serif">$</text>
    </g>
  );
}

export default function Rest() {
  return (
    <section className="section rest" id="como" aria-labelledby="rest-title">
      <div className="wrap rest__head">
        <h2 id="rest-title">Tu negocio trabaja mientras tú descansas.</h2>
        <div className="rest__text">
          <p>Tus clientes reciben respuestas al instante, a cualquier hora.</p>
          <p>
            De noche duermes y de día cuentas tus ingresos. Tu asistente virtual sigue atendiendo por
            WhatsApp.
          </p>
        </div>
      </div>

      <div className="wrap">
        <div
          className="scene"
          role="img"
          aria-label="Ilustración: de día la persona cuenta billetes en su tumbona y de noche duerme, mientras su teléfono con el asistente virtual de titankay sigue atendiendo y recibiendo reservas por WhatsApp."
        >
          <svg viewBox="0 0 600 400" focusable="false" aria-hidden="true">
            <defs>
              <linearGradient id="skyDay" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#8fd0d4" />
                <stop offset="1" stopColor="#e8f5ef" />
              </linearGradient>
              <linearGradient id="skyNight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#021b21" />
                <stop offset="1" stopColor="#06505d" />
              </linearGradient>
            </defs>

            <rect width="600" height="400" fill="url(#skyDay)" />
            <g className="s-night">
              <rect width="600" height="400" fill="url(#skyNight)" />
              {STARS.map(([x, y, r, d], i) => (
                <circle key={i} className="s-star" cx={x} cy={y} r={r} fill="#fff" style={{ animationDelay: `${d}s` }} />
              ))}
            </g>

            <g className="s-sun">
              <circle r="60" fill="#f7c948" opacity=".25" />
              <circle r="36" fill="#f7c948" />
            </g>
            <g className="s-moon">
              <circle r="30" fill="#f1f4e4" />
              <circle cx="-9" cy="-6" r="6" fill="#d3dac8" />
              <circle cx="10" cy="8" r="4.5" fill="#d3dac8" />
              <circle cx="6" cy="-13" r="3" fill="#d3dac8" />
            </g>

            <path d="M0 292 Q140 236 300 282 T600 262 V340 H0Z" fill="#0b8798" />
            <path d="M0 322 Q200 282 420 318 T600 304 V340 H0Z" fill="#066271" />
            <rect className="s-dusk" width="600" height="332" fill="#021b21" fillOpacity=".38" />

            {/* Terraza */}
            <rect y="330" width="600" height="70" fill="#033b44" />
            <path d="M0 352H600M0 374H600M0 394H600" stroke="#05505d" strokeWidth="2" />
            <ellipse cx="240" cy="362" rx="140" ry="8" fill="#02262b" opacity=".55" />

            {/* Tumbona */}
            <path d="M200 312L196 358M335 312L339 358M152 274L132 358" stroke="#f7c948" strokeWidth="6" strokeLinecap="round" />
            <path d="M193 305H342" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />
            <path d="M149 267L193 301" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />

            {/* Persona */}
            <path d="M205 286H330" stroke="#02262b" strokeWidth="22" strokeLinecap="round" />
            <ellipse cx="344" cy="286" rx="11" ry="8" fill="#d9976c" />
            <path d="M162 250L206 284" stroke="#1c9aae" strokeWidth="32" strokeLinecap="round" />
            <circle cx="146" cy="238" r="17" fill="#3a2a22" />
            <circle cx="149" cy="241" r="14" fill="#d9976c" />
            {/* De día: gafas, sonrisa y contando billetes */}
            <g className="s-awake">
              <rect x="149" y="238" width="16" height="6" rx="3" fill="#02262b" />
              <path d="M153 250q4 3 8 0" stroke="#7a4a30" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M178 254Q198 242 214 228" stroke="#d9976c" strokeWidth="10" strokeLinecap="round" fill="none" />
              <g transform="translate(224 212)">
                <g className="s-count">
                  <g transform="rotate(-30) translate(0 -7)"><Bill /></g>
                  <g transform="rotate(-10) translate(0 -7)"><Bill /></g>
                  <g transform="rotate(12) translate(0 -7)"><Bill /></g>
                </g>
              </g>
              <circle cx="216" cy="227" r="6.5" fill="#d9976c" />
              {[0, 1, 2].map((i) => (
                <g key={i} transform="translate(226 204)">
                  <g className="s-bill" style={{ animationDelay: `${i * 0.8}s` }}>
                    <Bill />
                  </g>
                </g>
              ))}
            </g>

            {/* De noche: ojos cerrados y zzz */}
            <g className="s-asleep">
              <path d="M151 240q4 4 9 0" stroke="#02262b" strokeWidth="2.2" strokeLinecap="round" fill="none" />
              <path d="M178 256Q205 272 224 262" stroke="#d9976c" strokeWidth="10" strokeLinecap="round" fill="none" />
              <g fontFamily="'Bricolage Grotesque', sans-serif" fontWeight="800" fill="#ffffff">
                <text className="s-zz" x="128" y="206" fontSize="16" style={{ animationDelay: '0s' }}>z</text>
                <text className="s-zz" x="146" y="188" fontSize="21" style={{ animationDelay: '.8s' }}>z</text>
                <text className="s-zz" x="166" y="168" fontSize="27" style={{ animationDelay: '1.6s' }}>z</text>
              </g>
            </g>

            {/* Mesa con teléfono */}
            <path d="M424 326L420 362M514 326L518 362" stroke="#f7c948" strokeWidth="5" strokeLinecap="round" />
            <rect x="410" y="318" width="118" height="8" rx="4" fill="#f7c948" />
            <rect x="496" y="296" width="16" height="22" rx="3" fill="#ffffff" opacity=".85" />
            <path d="M506 296L511 280" stroke="#f7c948" strokeWidth="3" strokeLinecap="round" />

            <circle className="s-ripple" cx="452" cy="271" r="34" fill="none" stroke="#f7c948" strokeWidth="3" />
            <circle className="s-ripple" cx="452" cy="271" r="34" fill="none" stroke="#f7c948" strokeWidth="3" style={{ animationDelay: '1.2s' }} />
            <g transform="translate(426 224)">
              <rect width="52" height="94" rx="11" fill="#02262b" />
              <rect x="4" y="4" width="44" height="86" rx="8" fill="#066271" />
              <line x1="26" y1="30" x2="26" y2="23" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="26" cy="21" r="3.2" fill="#f7c948" />
              <rect x="11" y="31" width="30" height="24" rx="9" fill="#ffffff" />
              <circle className="s-eye" cx="19" cy="43" r="3" fill="#066271" />
              <circle className="s-eye" cx="33" cy="43" r="3" fill="#066271" />
              <path d="M21 49q5 4 10 0" stroke="#066271" strokeWidth="2" strokeLinecap="round" fill="none" />
              <rect x="10" y="63" width="32" height="6" rx="3" fill="#fff" opacity=".55" />
              <rect x="10" y="73" width="22" height="6" rx="3" fill="#fff" opacity=".35" />
            </g>

            {/* Planta */}
            <path d="M546 318h28l-4 28h-20z" fill="#ffffff" />
            <g fill="#2aa59a">
              <ellipse cx="560" cy="292" rx="7" ry="26" transform="rotate(-26 560 318)" />
              <ellipse cx="560" cy="290" rx="7" ry="28" />
              <ellipse cx="560" cy="292" rx="7" ry="26" transform="rotate(26 560 318)" />
            </g>
          </svg>

          <ul className="scene__tags" aria-hidden="true">
            {TAGS.map((t, i) => (
              <li key={t.text} className="tag" style={{ '--i': i, '--x': t.x, top: t.y }}>
                <Check width={14} height={14} />
                {t.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
