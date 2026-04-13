import React from "react";
import PageTitle from "../../../components/pagetitle/PageTitle";

const Jenjangonl26 = () => {
  return (
    <>
      <PageTitle
        menuback="Category Page"
        backbtn="/kategori26"
        motherMenu="List of Winners Online"
        activeMenu="/ 2026"
      />

      <section className="faq-section">
        <div className="container text-center">
          <h1>
            Choose based on the Level of the Online event you are participating
            in
          </h1>
          <div className="hero-btn text-center">
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1VqAlwhmCV451Eq3LyijTZl1WWWyID-cN/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              University
            </a>
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/16MSkBInY5WgQXk_6PmNCDSordtWXR6Jv/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Secondary School
            </a>
            {/* <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1VpoBAOTvp_ogiLspFjKAnVIXts_qoy4E/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Junior High School
            </a> */}
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1bvwwxGcfTHfT2fQIrqi0l4-i_DAh2AdA/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Elementary School
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jenjangonl26;
