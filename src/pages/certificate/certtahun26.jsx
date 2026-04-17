import React from "react";
import PageTitle from "../../components/pagetitle/PageTitle";

const Certtahun26 = () => {
  return (
    <>
      <PageTitle
        menuback="Home"
        backbtn="/"
        motherMenu="Certificate Supervisors 2026"
      />

      <section className="faq-section">
        <div className="container text-center">
          <h1>Choose the type of certificate</h1>
          <div className="hero-btn text-center">
            <a
              className="btn m-2"
              href="https://drive.google.com/drive/folders/1cfecy_8f1IymErRrxpJkz98JHD7ICK_b?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Online
            </a>
            <a
              className="btn m-2"
              href="https://drive.google.com/drive/folders/17p6lZcRR1--0BnNBWE7Wi-Tlf9NX_1IG?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Offline
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certtahun26;
