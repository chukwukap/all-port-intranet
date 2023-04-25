import SectionTeaser from "../components/SectionTeaser";
import TeaserCard from "../components/TeaserCard";
import TeaserManager from "../components/TeaserManager";
import TeaserPropose from "../components/TeaserPropose";
import useTitle from "../hooks/useTitle";
import "./pages.css";

function WhoWeArePage() {
  useTitle("Who we are");
  return (
    <main className="home-page page">
      <section className="who-we-are-page__section1">
        <img src="assets/img13.jpeg" alt="our banner" />
      </section>
      <section className={"section who-we-are-page__section2 "}>
        <div className={"content "}>
          <div className="">
            <h1>Who we are</h1>
          </div>
          <div className="grid-box paragraph-1">
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
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor si
            </p>
          </div>
        </div>
      </section>
      <section className={"section department-services-page__section1 "}>
        <div className={""}>
          <div className="">{/* <h1 className="headline-"></h1> */}</div>
          <div className="grid-box">
            <SectionTeaser className="" />
            <SectionTeaser />
            <SectionTeaser />
          </div>
        </div>
      </section>

      <section className="section who-we-are-page__section4">
        <div>
          <div>
            <h3>company Policy</h3>
            <p className="paragraph-1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor si
            </p>
          </div>
          <div className="cards">
            <TeaserCard datum={{}} className="card" />
            <TeaserCard className="card" />
          </div>
          <div>
            <h2>Lorem ipsum</h2>
            <div className="paragraph-1">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit
              </p>
              <p>
                Amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                invidunt ut labore et dolore magna aliquyam erat, sed diam
                voluptua. At vero eos et accusam et justo duo dolores et ea
                rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod
              </p>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor si
              </p>
            </div>
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

export default WhoWeArePage;
