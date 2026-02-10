// import C_About from "../components/C_About";
import PageTitle from "../components/pagetitle/PageTitle";

function About() {
  return (
    <>
      <PageTitle motherMenu="About" menuback="Home" backbtn="/" activeMenu="" />

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
                   The growth of creativity and idea development encourages students to produce various innovations that are beneficial to society and the environment. Creativity and idea development, as expressed through scientific writing, require a proper platform for evaluation and appreciation.
                    <br />
                    <br />
                   This event serves as a competition and evaluation platform for creativity, open to Elementary, Secondary, University students, and the Public (teachers, lecturers, researchers, companies, institutions, and organizations). It is expected to support the assessment and development of research outcomes produced by young researchers.
                    <br />
                    <br />
                    The Indonesian Young Scientist Association (IYSA), in collaboration with UIN Sunan Kalijaga Yogyakarta, proudly organizes the Youth International Science Fair (YISF), with support from MIICA and 1923 IMSEF.
                    <br />
                    <br />
                    This year, YISF returns with the hope of continuing to be a valuable platform for researchers to evaluate, develop, and showcase the ideas and scientific works they have produced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
