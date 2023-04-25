import { Link } from "react-router-dom";
import img from "../assets/teaser.jpeg";

function FullWidthTeaser() {
  return (
    <div className="full-width-teaser">
      <div className="full-width-teaser__img-container">
        <img src={img} alt="teaser" className="full-width-teaser__img" />
      </div>
      <div className="full-width-teaser__body">
        <Link className="full-width-teaser__link">SEE ALL EVENTS</Link>
        <div className="full-width-teaser__card">
          <h1 className="full-width-teaser__title headline-5">VirTUAL EVENT</h1>
          <time className="full-width-teaser__time headline-6">
            May 20, 2021
          </time>
          <p>Learn from Industry Superstars and </p>
          <button className="btn full-width-teaser__btn">
            Register for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default FullWidthTeaser;
