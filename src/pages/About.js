// import C_About from "../components/C_About";
import PageTitle from "../components/pagetitle/PageTitle";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <PageTitle motherMenu="About" activeMenu="" />

      <div className="mt-5">
        <section className="feature section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ml-auto justify-content-center">
                {/* <!-- About Mockup --> */}

                {/* <div className="image-content" data-aos="fade-right"> */}
                <img
                  className="img-fluid"
                  src="images/vektor/background.png"
                  alt="iphone"
                />
                {/* </div> */}
              </div>
              <div className="col-lg-6 mr-auto align-self-center">
                <div className="feature-content">
                  {/* <!-- About Title --> */}

                  <h2>Youth International Science Fair (YISF)</h2>

                  {/* <!-- About Description --> */}
                  {/* University Udayana Bali Faculty of Agriculture,  */}
                  <p className="desc text-justify">
                    The number of creativity and idea development makes students
                    produce many products that are beneficial to society and the
                    environment. Creativity and the development of ideas as
                    outlined in the written work requires a place to evaluate
                    the results.
                    <br />
                    <br />
                    This event can be a place for creativity competitions for Elementary, Secondary, University, and Public (teachers, lecturers, researchers, companies, institutions, organizations). This event is expected to help evaluate the results of student research. Indonesian Young Scientist Association (IYSA) in collaboration with University Diponegoro Faculty of Engineering, and BUCA IMSEF Turkey will hold the event “Youth International Science Fair (YISF).
                    <br />
                    <br />
                    In 2023, YISF take place online and offline, which be attended by 285 online teams, and 75 offline teams from 30 countries. The offline competition was held in PGRI Mahadewa University, Bali.
                    <br />
                    <br />
                    For this year, YISF is back with the hope of being the right
                    place for researchers to evaluate the ideas and works that
                    have been produced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default About;
