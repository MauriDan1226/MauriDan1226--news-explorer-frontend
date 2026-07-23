import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants.js';
import './Footer.css';

// Pie de página: copyright + enlaces de navegación y redes sociales.
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__copyright">
          © {year} Supersite, desarrollado con News API.
        </p>

        <nav className="footer__nav" aria-label="Enlaces del pie de página">
          <ul className="footer__links list">
            <li className="footer__item">
              <Link to={ROUTES.HOME} className="footer__link link">
                Inicio
              </Link>
            </li>
            <li className="footer__item">
              <a
                href="https://tripleten.com"
                className="footer__link link"
                target="_blank"
                rel="noreferrer"
              >
                TripleTen
              </a>
            </li>
          </ul>

          <ul className="footer__socials list">
            <li className="footer__item">
              <a
                href="https://github.com"
                className="footer__social link"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.facebook.com"
                className="footer__social link"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
