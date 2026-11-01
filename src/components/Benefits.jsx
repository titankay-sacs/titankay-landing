import { Clock, Chat, Repeat, Unlock } from './Icons.jsx';

const ITEMS = [
  { icon: <Clock width={30} height={30} />, text: 'Menos tiempo gestionando citas, más tiempo para lo importante.' },
  { icon: <Chat width={30} height={30} />, text: 'Mejor atención al cliente, sin estar siempre disponible.' },
  { icon: <Repeat width={30} height={30} />, text: 'Automatiza tareas repetitivas y recupera tu tiempo.' },
  { icon: <Unlock width={30} height={30} />, text: 'Más libertad sin renunciar a oportunidades de negocio.' },
];

export default function Benefits() {
  return (
    <section className="section benefits" aria-labelledby="ben-title">
      <div className="wrap">
        <h2 id="ben-title">Lo que recuperas con titankay.</h2>
        <ul className="benefits__list">
          {ITEMS.map((it) => (
            <li className="benefit" key={it.text}>
              <span className="benefit__icon">{it.icon}</span>
              <p>{it.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
