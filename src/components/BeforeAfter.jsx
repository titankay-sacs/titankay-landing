import { useEffect, useState } from 'react';
import Bot from './Bot.jsx';
import { Phone, Chat, Check } from './Icons.jsx';

const NOTES = [
  { icon: 'phone', title: 'Llamada perdida', text: 'Hace 1 min' },
  { icon: 'chat', title: 'Marta', text: '¿Tienen hora para hoy?' },
  { icon: 'phone', title: 'Llamada perdida', text: 'Hace 6 min' },
  { icon: 'chat', title: 'Carlos', text: '¿Hasta qué hora atienden?' },
  { icon: 'chat', title: 'Nueva consulta', text: 'Quiero reservar para el sábado' },
];

const DONE = [
  { title: 'Cita reservada', text: 'Mañana, 17:30' },
  { title: 'Consulta respondida', text: 'Horarios y precios' },
  { title: 'Recordatorio enviado', text: 'Cita del viernes' },
];

export default function BeforeAfter() {
  const [tick, setTick] = useState(0);

  // El contador de mensajes sin responder sube hasta 14 y se queda un momento.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTick(14);
      return;
    }
    const id = setInterval(() => setTick((t) => (t >= 19 ? 0 : t + 1)), 650);
    return () => clearInterval(id);
  }, []);
  const missed = Math.min(tick, 14);

  return (
    <section className="section ba" aria-labelledby="ba-title">
      <div className="wrap">
        <h2 id="ba-title" className="ba__title">
          Deja de vivir pendiente del teléfono.
        </h2>

        <div className="ba__stage">
          <div className="ba__col">
            <div className="phone-wrap">
              <div className="pill pill--alert" aria-live="off">
                <strong>{missed}</strong> sin responder
              </div>
              <div className="phone phone--sm phone--buzz" aria-hidden="true">
                <div className="phone__notch" />
                <div className="phone__screen screen--busy">
                  <div className="lock-time">21:40</div>
                  <div className="lock-date">domingo</div>
                  {NOTES.map((n, i) => (
                    <div className="note" key={i} style={{ animationDelay: `${i * 1.4}s` }}>
                      <span className={`note__icon note__icon--${n.icon}`}>
                        {n.icon === 'phone' ? <Phone width={15} height={15} /> : <Chat width={15} height={15} />}
                      </span>
                      <span>
                        <strong>{n.title}</strong>
                        <br />
                        {n.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h3>Sin titankay</h3>
            <p className="ba__note">Interrupciones a todas horas y clientes que se quedan sin respuesta.</p>
          </div>

          <div className="ba__col">
            <div className="phone-wrap">
              <div className="pill pill--ok">
                <Check width={14} height={14} /> <strong>0</strong> sin responder
              </div>
              <div className="phone phone--sm" aria-hidden="true">
                <div className="phone__notch" />
                <div className="phone__screen screen--calm">
                  <Bot size={92} className="bot--float" />
                  <div className="calm__title">Todo atendido</div>
                  <div className="calm__sub">Tu asistente virtual en WhatsApp</div>
                  {DONE.map((d, i) => (
                    <div className="done" key={d.title} style={{ animationDelay: `${0.8 + i * 1.4}s` }}>
                      <span className="done__tick">
                        <Check width={14} height={14} />
                      </span>
                      <span>
                        <strong>{d.title}</strong>
                        <br />
                        {d.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h3>Con titankay</h3>
            <ul className="ba__list">
              <li>Menos interrupciones, más concentración.</li>
              <li>Menos preocupaciones, más tranquilidad mental.</li>
            </ul>
          </div>
        </div>

        <p className="ba__quote">La tranquilidad de saber que tus clientes pueden ser atendidos.</p>
      </div>
    </section>
  );
}
