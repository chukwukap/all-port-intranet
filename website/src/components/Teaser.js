function Teaser({ article, className }) {
  return (
    <article className={"teaser " + className}>
      <img
        // src={article.img || teaserImg}
        src={article?.imgUrl || "assets/me.jpg"}
        className="teaser__img"
        alt="allPort"
      />
      <div className="teaser__txts">
        <p className="teaser__prgh paragraph-1">
          {article?.body ||
            "placeholder Text is asking more bankers to return its New York"}
        </p>
        <time className="paragraph-2 teaser__time">
          {article?.createdAt || "Sep. 24,2023 at 11:07 a.m ET"}
        </time>
      </div>
    </article>
  );
}
export default Teaser;
