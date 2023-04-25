import Pane from "../components/Pane";
import useTitle from "../hooks/useTitle";
import SectionTeaser from "../components/SectionTeaser.js";
import "./pages.css";
import Accordion from "../components/Accordion";
import TeaserPropose from "../components/TeaserPropose";
import TeaserManager from "../components/TeaserManager";

function CovidInfo() {
  useTitle("Covid Info");
  return (
    <main className="home-page covid-info-page page">
      <section className="who-we-are-page__section1">
        <img src="assets/img2.jpeg" alt="allPort covid-19 page banner" />
      </section>
      <section className={"covid-info-page__section1 section "}>
        <div className="grid-box">
          <div className="">
            <h1>Covid-19 Information & Resources</h1>
            <p>
              We are committed to supporting our teams and providing every
              employee with the resources they need to be successful during this
              challenging times
            </p>
          </div>
          <div className="panes">
            <h1>How do I?</h1>
            <div className="grid-box">
              <Pane datumObj={{ title: "Retrieve Personal Items" }} />
              <Pane datumObj={{ title: "View allPort Covid Policy" }} />
              <Pane datumObj={{ title: "See COVID Network News" }} />
            </div>
          </div>
          <div className="">
            <p>
              The COVID-19 pandemic is a challenge to humanity that demands a
              global, united response, not just from the scientific community
              but also from industry, organisations, governments and every
              single person around the world.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            </p>
            <p>
              Amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod
            </p>
          </div>
          <div className="">
            <SectionTeaser datumObj={{ title: "Working from Home" }} />
            <SectionTeaser datumObj={{ title: "Technology & IT Support" }} />
          </div>
          <div className="">
            <div>
              <h1 className="headline-6">Important Information</h1>
              <p className="paragraph-1">
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est
              </p>
            </div>
            <Accordion
              datumObj={{
                body: "Live is good buds Lorem in the midst of the whole technological consortium ",
                title: "Office Re-entry Status",
              }}
              className="paragraph-1"
            />
            <Accordion
              datumObj={{
                body: "Live is good buds",
                title: "Global Work From Home & Travel  Policy",
              }}
              className="paragraph-1"
            />
            <Accordion
              datumObj={{
                body: "Live is good buds",
                title: "Reporting COVID-19 Exposure or Illness",
              }}
              className="paragraph-1"
            />
            <Accordion
              datumObj={{
                body: "Live is good buds",
                title: "Emergency Contacts",
              }}
              className="paragraph-1"
            />
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

export default CovidInfo;
