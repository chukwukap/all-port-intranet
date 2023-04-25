import Pane from "../components/Pane";
import SectionTeaser from "../components/SectionTeaser";
import TeaserManager from "../components/TeaserManager";
import TeaserPropose from "../components/TeaserPropose";
import useTitle from "../hooks/useTitle";
import "./pages.css";

function JobToolsPage() {
  useTitle("Job Tools");
  return (
    <main className="home-page page">
      <section className={"section department-services-page__section1 "}>
        <div className={""}>
          <div className="">
            <h1 className="headline-4">Job Tools</h1>
          </div>
          <div className="grid-box">
            <SectionTeaser className="" />
            <SectionTeaser />
            <SectionTeaser />
          </div>
        </div>
      </section>
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
      <section className={"section department-services-page__section3 "}>
        <div>
          <div className="section__header">
            <h1 className="headline-4">Additional Tools</h1>
          </div>
          <div className="grid-box">
            {new Array(20)
              .fill({
                title: "Tool Highlight",
              })
              .map((datum) => {
                return <Pane datumObj={datum} />;
              })}
          </div>
        </div>
      </section>

      <section className={"section department-services-page__section4"}>
        <div className="grid-box">
          <TeaserPropose />
          <TeaserManager />
        </div>
      </section>
    </main>
  );
}

export default JobToolsPage;
