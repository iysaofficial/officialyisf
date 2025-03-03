import React from "react";
import PageTitle from "../../components/pagetitle/PageTitle";

const Lowtahun = () => {
  return (
    <>
      <PageTitle motherMenu="List of Winners" menuback="Home" backbtn="/" activeMenu="" />

      <section className="faq-section">
        <div className="container">
            <h1>Select by the year of the event you are participating in</h1>
          <div className="hero-btn text-center">
          <a className="btn m-2" href="/kategori25">2025</a>
            <a className="btn m-2" href="/kategori24">2024</a>
            <a className="btn m-2" href="https://drive.google.com/file/d/1bQDSnHcLw3ClOa-UcwC3ZZBboHW1mZNC/view?usp=drive_link" target="_blank"                       rel="noreferrer">2023</a>
            <a className="btn m-2" href="https://drive.google.com/file/d/1Go8pvv4h78iS2PepvW7V9zVETVWw1uqB/view?usp=drive_link" target="_blank" rel="noreferrer">2022</a>
            <a className="btn m-2" href="https://drive.google.com/file/d/16ALhp77-Ci_uXHp5yKUSNXAI0hBapViZ/view?usp=drive_link" target="_blank" rel="noreferrer">2021</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lowtahun;
