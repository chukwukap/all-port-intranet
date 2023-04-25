import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Pane from "../components/Pane";
import Teaser from "../components/Teaser";
import TeaserManager from "../components/TeaserManager";
import TeaserPropose from "../components/TeaserPropose";
import { getAllNews } from "../features/newsSlice/newsSlice";
import useTitle from "../hooks/useTitle";
import "./pages.css";

function HomePage() {
  useTitle("News");
  const allNews = useSelector(getAllNews);
  return (
    <main className="news-page page">
      <section className={"section news-page__section1"}>
        <div className="section1-header">
          <h1 className="headline-4">Featured News</h1>
        </div>
        <div className="grid-box">
          <div className="grid-element">
            <Carousel dataArray={allNews} />
          </div>
          <div className="grid-element">
            {allNews.slice(5).map((article) => {
              return (
                <Teaser className="teaser--horizontal" article={article} />
              );
            })}
          </div>
        </div>
      </section>
      {/* Company News */}
      <section className={"section news-page__section2"}>
        <div>
          <div className="section__header">
            <h1 className="headline-4">Company News</h1>
            <Link>Seel all</Link>
          </div>
          <div className="grid-box">
            {allNews
              .slice(Math.floor(Math.random() * allNews.length - 2))
              .map((article) => {
                return <Teaser article={article} />;
              })}
          </div>
        </div>
      </section>
      {/* people news */}
      <section className={"section news-page__section3 "}>
        <div className="news-page-section__conte">
          <div className="section__header">
            <h1 className="headline-4">People News</h1>
          </div>
          <div className="grid-box">
            {allNews
              .slice()
              .splice(3, 3)
              .map((article) => {
                return <Teaser className="teaser--ellipse" article={article} />;
              })}
          </div>
        </div>
      </section>
      <section className={"section news-page__section4 "}>
        <div>
          <div className="section__header">
            <h1 className="headline-4">How do I?</h1>
          </div>
          <div className="grid-box">
            {[1, 2, 3, 4, 5, 6].map((datum) => {
              return <Pane datumObj={datum} />;
            })}
          </div>
        </div>
      </section>
      <section className={"section news-page__section5 "}>
        <div className="grid-box">
          <TeaserPropose />
          <TeaserManager />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
