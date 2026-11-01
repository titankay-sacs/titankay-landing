import Bot from './Bot.jsx';
import { Check, Chat } from './Icons.jsx';

export default function HowItWorks() {
  return (
    <section className="section how" id="como" aria-labelledby="how-title">
      <div className="wrap">
        <div className="how__head">
          <h2 id="how-title">titankay es un asistente virtual que atiende tu WhatsApp.</h2>
          <p>
            Tus clientes escriben a tu WhatsApp como siempre y el asistente virtual responde por ti,
            propone horarios y reserva la cita.
          </p>
        </div>

        <ol className="steps">
          <li className="step">
            <div className="step__visual">
              <span className="wa wa--solid">
                <Chat width={13} height={13} /> WhatsApp
              </span>
              <div className="bubble bubble--client">Hola, ¿tienen una cita libre mañana?</div>
            </div>
            <h3>Tu cliente escribe a tu WhatsApp.</h3>
          </li>

          <li className="step">
            <div className="step__visual">
              <span className="avatar">
                <Bot size={34} />
              </span>
              <div className="bubble bubble--bot">
                <span className="bubble__who">Asistente virtual</span>
                Claro. Tengo libre a las 16:00 y a las 17:30.
              </div>
            </div>
            <h3>Tu asistente virtual responde al instante.</h3>
          </li>

          <li className="step">
            <div className="step__visual">
              <div className="confirm">
                <span className="confirm__tick">
                  <Check width={18} height={18} />
                </span>
                <span>
                  <strong>Cita confirmada</strong>
                  <br />
                  Mañana, 17:30
                </span>
              </div>
            </div>
            <h3>La cita queda reservada y tú no hiciste nada.</h3>
          </li>
        </ol>
      </div>
    </section>
  );
}
