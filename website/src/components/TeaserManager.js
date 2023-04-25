function TeaserManager() {
  return (
    <div className="teaser-manager">
      <h1 className="headline-4">Content Manager</h1>
      <div className="grid-box">
        <img
          src="assets/teaser.jpeg"
          alt="propose"
          className="teaser-manager__img"
        />
        <div className="teaser-manager__txts">
          <p className="teaser-manager__name paragraph-1">Kevin kent</p>
          <div className="teaser-manager__contact paragraph-1">
            Kevinsmith@nuport.com - 703-656-02020
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeaserManager;
