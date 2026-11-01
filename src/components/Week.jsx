import { useInView } from '../useInView.js';
import { Check } from './Icons.jsx';

const DAYS = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
const DAY_NAMES = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

// Cada fila es una franja del día; 1 = cita atendida por titankay.
const SLOTS = [
  { label: 'Mañana', rest: false, row: [1, 0, 1, 1, 0, 1, 1] },
  { label: 'Tarde', rest: false, row: [1, 1, 1, 0, 1, 1, 1] },
  { label: 'Noche', rest: true, row: [0, 1, 1, 1, 1, 1, 1] },
  { label: 'Madrugada', rest: true, row: [1, 0, 0, 1, 0, 1, 1] },
];

export default function Week() {
  const [ref, seen] = useInView(0.35);
  let n = 0;

  return (
    <section className="section week" aria-labelledby="week-title">
      <div className="wrap week__grid">
        <div className="week__copy">
          <h2 id="week-title">Reservas de día, de noche y los fines de semana.</h2>
          <p>
            Una semana de ejemplo: las citas que llegan por WhatsApp de noche y en fin de semana quedan
            reservadas por tu asistente virtual, sin que tú intervengas.
          </p>
          <ul className="legend">
            <li>
              <span className="legend__dot legend__dot--day" /> Cita atendida en horario normal
            </li>
            <li>
              <span className="legend__dot legend__dot--rest" /> Cita que llegó mientras descansabas
            </li>
          </ul>
        </div>

        <div
          ref={ref}
          className={`cal ${seen ? 'is-in' : ''}`}
          role="img"
          aria-label="Calendario semanal de ejemplo con citas reservadas por titankay en mañana, tarde, noche, madrugada y fin de semana."
        >
          <span />
          {DAYS.map((d, i) => (
            <span key={d} className={`cal__day ${i > 4 ? 'cal__day--weekend' : ''}`} title={DAY_NAMES[i]}>
              {d}
            </span>
          ))}
          {SLOTS.map((slot) => (
            <div className="cal__row" key={slot.label}>
              <span className="cal__slot">{slot.label}</span>
              {slot.row.map((on, i) => {
                const weekend = i > 4;
                const kind = slot.rest || weekend ? 'rest' : 'day';
                const idx = on ? n++ : 0;
                return (
                  <span
                    key={i}
                    className={`cell ${on ? `cell--on cell--${kind}` : ''}`}
                    style={{ '--n': idx }}
                  >
                    {on ? <Check /> : null}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
