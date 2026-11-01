import { LogoMark } from './Bot.jsx';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__row">
        <a className="logo" href="#inicio" aria-label="Titankay, inicio">
          <LogoMark />
          titankay
        </a>

        <p>
          © {new Date().getFullYear()} titankay. Todos los derechos reservados.
        </p>

        <a
          href="mailto:contacto@titankay.com"
          className="footer__email"
        >
          contacto@titankay.com
        </a>

        <nav className="footer__links" aria-label="Enlaces legales">
          <a href="/privacidad">Privacidad</a>
          <a href="/aviso-legal">Aviso legal</a>
        </nav>
      </div>
    </footer>
  );
}