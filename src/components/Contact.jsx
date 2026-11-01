
import { useRef, useState } from 'react';
import Bot from './Bot.jsx';
import { Check } from './Icons.jsx';
import { supabase } from '../lib/supabase.js';

const INITIAL = {
  nombre: '',
  negocio: '',
  telefono: '',
  email: '',
  tipo: '',
  mensaje: '',
  acepto: false,
};

const TIPOS = [
  'Salud y bienestar',
  'Belleza y estética',
  'Restaurantes y hostelería',
  'Servicios profesionales',
  'Otro',
];

const LIMITS = {
  nombre: 150,
  negocio: 200,
  telefono: 40,
  email: 254,
  tipo: 100,
  mensaje: 10000,
};

function validate(values) {
  const errors = {};

  const nombre = values.nombre.trim();
  const negocio = values.negocio.trim();
  const telefono = values.telefono.trim();
  const email = values.email.trim();
  const tipo = values.tipo.trim();
  const mensaje = values.mensaje.trim();

  if (!nombre) {
    errors.nombre = 'Escribe tu nombre.';
  } else if (nombre.length > LIMITS.nombre) {
    errors.nombre = 'El nombre es demasiado largo.';
  }

  if (negocio.length > LIMITS.negocio) {
    errors.negocio = 'El nombre del negocio es demasiado largo.';
  }

  if (!telefono || telefono.replace(/\D/g, '').length < 7) {
    errors.telefono = 'Escribe un teléfono o WhatsApp válido.';
  } else if (telefono.length > LIMITS.telefono) {
    errors.telefono = 'El teléfono es demasiado largo.';
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email =
      'Escribe un correo válido, por ejemplo nombre@correo.com.';
  } else if (email.length > LIMITS.email) {
    errors.email = 'El correo es demasiado largo.';
  }

  if (tipo && !TIPOS.includes(tipo)) {
    errors.tipo = 'Selecciona un tipo de negocio válido.';
  }

  if (tipo.length > LIMITS.tipo) {
    errors.tipo = 'El tipo de negocio es demasiado largo.';
  }

  if (mensaje.length > LIMITS.mensaje) {
    errors.mensaje = 'El mensaje no puede superar los 10.000 caracteres.';
  }

  if (!values.acepto) {
    errors.acepto = 'Necesitamos tu permiso para contactarte.';
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const formRef = useRef(null);
  const submittingRef = useRef(false);

  const onChange = (event) => {
    const { name, type, value, checked } = event.target;

    setValues((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setErrors((current) => {
      if (!(name in current)) return current;

      const next = { ...current };
      delete next[name];
      return next;
    });

    setSubmitError('');
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Evita envíos simultáneos incluso antes del siguiente render.
    if (submittingRef.current) return;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitError('');

    const firstError = Object.keys(validationErrors)[0];

    if (firstError) {
      formRef.current
        ?.querySelector(`[name="${firstError}"]`)
        ?.focus();
      return;
    }

    submittingRef.current = true;
    setSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke(
        'submit-contact-request',
        {
          body: {
            name: values.nombre.trim(),
            business_name: values.negocio.trim() || null,
            phone: values.telefono.trim(),
            email: values.email.trim().toLowerCase(),
            business_type: values.tipo || null,
            message: values.mensaje.trim() || null,
          },
        },
      );

      if (error) {
        throw error;
      }

      if (!data?.success) {
        throw new Error('La solicitud no fue confirmada.');
      }

      setValues({ ...INITIAL });
      setErrors({});
      setSent(true);
    } catch (error) {
      // No registramos los datos personales del formulario en la consola.
      console.error('Error al enviar el formulario de contacto:', error);

      setSubmitError(
        'No pudimos enviar tus datos. Comprueba tu conexión e inténtalo de nuevo.',
      );
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  };

  const field = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange,
    maxLength: LIMITS[name],
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  });

  const fieldError = (name) =>
    errors[name] ? (
      <span
        className="field__error"
        id={`${name}-error`}
        role="alert"
      >
        {errors[name]}
      </span>
    ) : null;

  return (
    <section
      className="section contact"
      id="contacto"
      aria-labelledby="contact-title"
    >
      <div className="wrap contact__grid">
        <div className="contact__copy">
          <h2 id="contact-title">Recupera tu tiempo libre.</h2>

          <p>
            Déjanos tus datos y te mostramos cómo el asistente virtual
            de titankay atiende a tus clientes por WhatsApp mientras
            tú descansas.
          </p>

          <Bot
            size={200}
            className="bot--float contact__bot"
          />
        </div>

        <div className="card">
          {sent ? (
            <div className="sent" role="status">
              <span className="sent__tick">
                <Check width={34} height={34} />
              </span>

              <h3>Recibimos tus datos.</h3>

              <p>
                Te escribiremos pronto para mostrarte cómo el
                asistente virtual de titankay atiende tu WhatsApp
                por ti.
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              className="form"
              onSubmit={onSubmit}
              noValidate
              aria-busy={submitting}
            >
              <div className="field">
                <label htmlFor="nombre">Tu nombre</label>
                <input
                  type="text"
                  autoComplete="name"
                  required
                  {...field('nombre')}
                />
                {fieldError('nombre')}
              </div>

              <div className="field">
                <label htmlFor="negocio">
                  Nombre del negocio (opcional)
                </label>
                <input
                  type="text"
                  autoComplete="organization"
                  {...field('negocio')}
                />
                {fieldError('negocio')}
              </div>

              <div className="field">
                <label htmlFor="telefono">
                  Teléfono o WhatsApp
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  {...field('telefono')}
                />
                {fieldError('telefono')}
              </div>

              <div className="field">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  {...field('email')}
                />
                {fieldError('email')}
              </div>

              <div className="field field--full">
                <label htmlFor="tipo">
                  Tipo de negocio (opcional)
                </label>

                <select {...field('tipo')}>
                  <option value="">Selecciona una opción</option>

                  {TIPOS.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>

                {fieldError('tipo')}
              </div>

              <div className="field field--full">
                <label htmlFor="mensaje">
                  ¿Qué te gustaría automatizar? (opcional)
                </label>

                <textarea
                  rows={3}
                  placeholder="Cuéntanos brevemente qué necesitas..."
                  {...field('mensaje')}
                />

                {fieldError('mensaje')}

                <small>
                  {values.mensaje.length}/{LIMITS.mensaje} caracteres
                </small>
              </div>

              <div className="field field--full">
                <label className="check" htmlFor="acepto">
                  <input
                    type="checkbox"
                    id="acepto"
                    name="acepto"
                    checked={values.acepto}
                    onChange={onChange}
                    aria-invalid={
                      errors.acepto ? 'true' : undefined
                    }
                    aria-describedby={
                      errors.acepto ? 'acepto-error' : undefined
                    }
                    required
                  />

                  <span>
                    Acepto que Titankay me contacte con información
                    sobre el servicio y he leído la{' '}
                    <a
                      href="/privacidad"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Política de privacidad
                    </a>.
                  </span>
                </label>

                {fieldError('acepto')}
              </div>

              {submitError && (
                <div
                  className="field__error"
                  role="alert"
                  aria-live="assertive"
                >
                  {submitError}
                </div>
              )}

              <button
                className="btn btn--teal btn--block"
                type="submit"
                disabled={submitting}
              >
                {submitting ? 'Enviando...' : 'Enviar mis datos'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
