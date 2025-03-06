import React from "react";
import PageTitle from "../../../components/pagetitle/PageTitle";

const Kategori24 = () => {
  return (
    <>
      <PageTitle
        menuback="Previous Page"
        backbtn="/lowtahun"
        motherMenu="List of Winners"
      />

      <section className="faq-section">
        <div className="container text-center">
          <h1>
            Choose based on the Category of the event you are participating in
          </h1>
          <div className="hero-btn text-center">
            <a
              className="btn m-2"
              href="https://drive.google.com/file/d/1MYx4k9XA1r79bNxBSMqfFct8VIkiKWR9/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              SPECIAL AWARD
            </a>
            <a className="btn m-2" href="/jenjangofl24">
              YISF OFFLINE
            </a>
            <a className="btn m-2" href="/jenjangonl24">
              YISF ONLINE
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kategori24;
