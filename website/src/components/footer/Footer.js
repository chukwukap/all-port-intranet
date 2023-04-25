import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__flex-item">
        <div>Help us improve allPort</div>
        <button className="btn">FEEDBACK</button>
      </div>
      <div className="footer__flex-item">
        <div>allPort</div>
        <nav>
          <Link>FAQS</Link>
          <Link>Accessibility Help</Link>
          <Link>Corporate Website</Link>
          <Link>Contact Us</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
