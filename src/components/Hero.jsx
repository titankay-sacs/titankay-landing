import PhoneChat from './PhoneChat.jsx';
import { LogoMark } from './Bot.jsx';
import { Moon, Bolt, Calendar } from './Icons.jsx';

// [x%, y%, retraso] posiciones fijas para las estrellas
const STARS = [
  [6, 12, 0], [14, 34, 1.2], [22, 8, 2.1], [31, 22, 0.6], [44, 10, 1.8], [52, 30, 2.6],
  [60, 7, 0.3], [68, 18, 1.5], [76, 9, 2.4], [84, 26, 0.9], [92, 12, 1.9], [96, 40, 0.4],
  [8, 62, 2.2], [18, 80, 1.1], [90, 70, 2.8], [72, 88, 0.7], [38, 90, 1.6], [4, 90, 0.2],
];

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="hero__sky" aria-hidden="true">
        {STARS.map(([x, y, d], i) => (
          <span key={i} className="star" style={{ left: `${x}%`, top: `${y}%`, '--d': `${d}s` }} />
        ))}
      </div>

      <nav className="nav wrap" aria-label="Principal">
        <div className="nav__brand">
          <a className="logo" href="#inicio">
            <LogoMark />
            titankay
          </a>
          <span className="logo__sub">Asistente virtual en WhatsApp</span>
        </div>
        <a className="btn btn--sun btn--small" href="#contacto">
          Dejar mis datos
        </a>
      </nav>

      <div className="hero__grid wrap">
        <div className="hero__copy">
          <h1>Más tiempo libre para ti.</h1>
          <p className="hero__lead">Desconecta del trabajo sin descuidar tu negocio.</p>
          <p className="hero__what">
            <strong>titankay es un asistente virtual que atiende tu WhatsApp:</strong> responde a tus
            clientes y agenda tus citas por ti, a cualquier hora.
          </p>
          <div className="hero__actions">
            <a className="btn btn--sun" href="#contacto">
              Quiero más tiempo libre
            </a>
            <a className="btn btn--ghost" href="#como">
              Ver cómo funciona
            </a>
          </div>
        </div>

        <div className="hero__stage">
          <div className="moon" aria-hidden="true" />
          <PhoneChat />
          <p className="chip chip--a">
            <Moon /> Son las 23:47. Tú descansas.
          </p>
          <p className="chip chip--b">
            <Bolt /> Respuesta en 2 segundos
          </p>
          <p className="chip chip--c">
            <Calendar /> Sábado 10:30 reservado
          </p>
        </div>
      </div>
    </header>
  );
}
