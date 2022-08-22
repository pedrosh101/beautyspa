import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-heading">Alexandre Gabriel</p>
        <p className="footer-text">Terapeuta - CRT: 43.332</p>
        <p className="footer-tel"><i class="fab fa-whatsapp" /> (12) 99797-9084 - <i class="fa fa-phone" /> (12) 3125-4889</p>
      </section>
      <section class="social-media">
        <div class="social-icons">
          <Link
            class="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f" />
          </Link>

          <a
            href="https://www.instagram.com/beautyspavp/"
            class="social-icon-link instagram"
            target="_blank"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram" />
          </a>

          <Link
            class="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i class="fab fa-youtube" />
          </Link>
          <Link
            class="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;