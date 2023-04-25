function TeaserCard({ datum, className }) {
  return (
    <div className={className + " teaser-card"}>
      <div>
        <img
          src={datum?.imgPath || "assets/teaser.jpeg"}
          className="teaser-card__img"
          alt="download book"
        />
      </div>
      <div className="body">
        <h1 className="paragraph-1">Company Handbook</h1>
        <div className="paragraph-3">Image-file.jpg 495 KB image/jpeg</div>
        <button className="btn">Download</button>
      </div>
    </div>
  );
}

export default TeaserCard;
