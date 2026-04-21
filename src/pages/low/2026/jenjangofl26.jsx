import React from "react";
import PageTitle from "../../../components/pagetitle/PageTitle";

const Jenjangofl26 = () => {
  return (
    <>
      <PageTitle
        menuback="Category Page"
        backbtn="/kategori26"
        motherMenu="List of Winners Offline"
        activeMenu="/ 2026"
      />

      <section className="faq-section">
        <div className="container text-center">
          <h1>
            Choose based on the Level of the Offline event you are participating
            in
          </h1>
          <div className="hero-btn text-center">
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1sM3y2L8NAX3EfLMzcFTyUhmLEWWwXDlz/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              University
            </a>
            {/* <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1CMJ1luyevWifflzuRBnlFp2PB1SHWyGk/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Senior High School
            </a> */}
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1FjXaLDvx6uBaOZTFwxhGEoxZ7B39_E6m/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Secondary School
            </a>
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1olX7IJsMq6LkUk8QLyYI6hTsa7gdqE3Z/view?usp=sharing"
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

export default Jenjangofl26;
