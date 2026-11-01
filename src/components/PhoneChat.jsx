import { useEffect, useState } from 'react';
import Bot from './Bot.jsx';
import { Check, Chat } from './Icons.jsx';

// Guion de la conversación de ejemplo (a las 23:47, cuando el dueño ya descansa).
const SCRIPT = [
  { from: 'client', text: 'Hola, ¿tienen una cita libre mañana por la tarde?' },
  { from: 'bot', who: true, text: '¡Hola! Soy el asistente virtual. Mañana hay espacio a las 16:00 y a las 17:30. ¿Cuál prefieres?', typing: 1500 },
  { from: 'client', text: 'A las 17:30, por favor.' },
  { from: 'bot', text: 'Listo. Tu cita queda reservada para mañana a las 17:30. Te enviaré un recordatorio.', typing: 1500 },
  { from: 'card' },
];

export default function PhoneChat() {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setShown(SCRIPT.length);
      return;
    }

    let cancelled = false;
    const timers = [];
    const after = (ms, fn) => timers.push(setTimeout(() => !cancelled && fn(), ms));

    const run = () => {
      setFade(false);
      setShown(0);
      setTyping(false);
      let t = 900;
      SCRIPT.forEach((m, i) => {
        if (m.from === 'bot') {
          after(t, () => setTyping(true));
          t += m.typing;
          after(t, () => {
            setTyping(false);
            setShown(i + 1);
          });
          t += 1200;
        } else if (m.from === 'card') {
          t += 300;
          after(t, () => setShown(i + 1));
          t += 800;
        } else {
          after(t, () => setShown(i + 1));
          t += 1300;
        }
      });
      after(t + 3000, () => setFade(true));
      after(t + 3600, run);
    };

    run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      className="phone"
      role="img"
      aria-label="Conversación de ejemplo por WhatsApp: un cliente pide una cita por la noche, el asistente virtual de titankay le responde al instante y la reserva."
    >
      <div className="phone__notch" />
      <div className="phone__screen">
        <div className="phone__status">
          <span>23:47</span>
          <span className="phone__signal">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="phone__head">
          <span className="avatar">
            <Bot size={34} face="#ffffff" ink="#066271" />
          </span>
          <div>
            <strong>titankay</strong>
            <small>
              <i className="live" /> Asistente virtual
            </small>
          </div>
          <span className="wa">
            <Chat width={13} height={13} /> WhatsApp
          </span>
        </div>

        <div className={`chat ${fade ? 'chat--fade' : ''}`}>
          {SCRIPT.slice(0, shown).map((m, i) =>
            m.from === 'card' ? (
              <div className="confirm" key={i}>
                <span className="confirm__tick">
                  <Check width={18} height={18} />
                </span>
                <span>
                  <strong>Cita confirmada</strong>
                  <br />
                  Mañana, 17:30
                </span>
              </div>
            ) : (
              <div className={`bubble bubble--${m.from}`} key={i}>
                {m.who && <span className="bubble__who">Asistente virtual</span>}
                {m.text}
              </div>
            )
          )}
          {typing && (
            <div className="bubble bubble--bot typing">
              <i />
              <i />
              <i />
            </div>
          )}
        </div>

        <div className="phone__input">Escribe un mensaje</div>
      </div>
    </div>
  );
}
