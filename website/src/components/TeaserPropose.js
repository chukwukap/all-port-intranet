function TeaserPropose() {
  return (
    <div className="teaser-propose">
      <h1 className="headline-4">Interested in proposing contents?</h1>
      <div className="grid-box">
        <img
          src="assets/teaser.jpeg"
          alt="propose"
          className="teaser-propose__img"
        />
        <div className="teaser-propose__txts">
          <p className="paragraph-1">
            if you have content that you would like to publish in the company
            intranet
          </p>
          <button className="btn">propose content</button>
        </div>
      </div>
    </div>
  );
}

export default TeaserPropose;
