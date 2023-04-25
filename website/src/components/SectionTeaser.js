function SectionTeaser({ className, datumObj }) {
  return (
    <div className={"section-teaser " + className}>
      <div>
        <img
          src="assets/teaser.jpeg"
          alt="section-teaser"
          className="section-teaser__img"
        />
      </div>
      <div className="section-teaser__txts">
        <p className="paragraph-1">
          {datumObj?.title || "Training and education"}
        </p>
        <svg
          className="section-teaser__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="7.41"
          height="12"
          viewBox="0 0 7.41 12"
        >
          <path
            id="ic_chevron_right_24px"
            d="M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z"
            transform="translate(-8.59 -6)"
            fill="#8172d5"
          />
        </svg>
      </div>
    </div>
  );
}

export default SectionTeaser;
