import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import FullWidthTeaser from "../components/FullWidthTeaser";
import Pane from "../components/Pane";
import QuickLinks from "../components/QuickLink";
import Teaser from "../components/Teaser";
import TeaserManager from "../components/TeaserManager";
import TeaserPropose from "../components/TeaserPropose";
import { getAllNews } from "../features/newsSlice/newsSlice";
import useTitle from "../hooks/useTitle";
import "./pages.css";

function HomePage() {
  useTitle("AllPort");
  const allNews = useSelector(getAllNews);

  return (
    <main className="home-page page">
      <section className={"home-page__section1 section  "}>
        <div className="grid-box">
          <div className="">
            <h1 className="headline-4">Featured News</h1>
            <Carousel dataArray={allNews} />
          </div>
          <div className="">
            <h1 className="headline-4">Quick Links</h1>
            <QuickLinks />
          </div>
        </div>
      </section>
      {/* Company News */}
      <section className={"home-page__section2 section"}>
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
      {/* How do I? */}
      <section className={"section home-page__section3 "}>
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
      <section className={"home-page__section4 section  "}>
        <FullWidthTeaser />
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
