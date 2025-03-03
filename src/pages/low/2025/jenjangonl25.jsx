import React from "react";
import PageTitle from "../../../components/pagetitle/PageTitle";

const Jenjangonl24 = () => {
  return (
    <>
      <PageTitle motherMenu="List of Winners" activeMenu="/ list of winners" />

      <section className="faq-section">
        <div className="container text-center">
            <h1>Choose based on the Level of the Online event you are participating in</h1>
          <div className="hero-btn text-center">
            <a className="btn m-2" href="https://drive.google.com/file/d/1HR9GsP-5cP2PXdwrXvJ996x1bnmjLOq6/view?usp=sharing" target="_blank" rel="noreferrer">University</a>
            <a className="btn m-2" href="https://drive.google.com/file/d/1Z_LxecmeVYSq_LsSo_z5bbtdBfz3iifC/view?usp=sharing" target="_blank" rel="noreferrer">Senior High School</a>
            <a className="btn m-2" href="https://drive.google.com/file/d/1VpoBAOTvp_ogiLspFjKAnVIXts_qoy4E/view?usp=sharing" target="_blank" rel="noreferrer">Junior High School</a>
            <a className="btn m-2" href="https://drive.google.com/file/d/1WyVzPAPQFxXaWlFzz5klIajOKiNWDMtL/view?usp=sharing" target="_blank" rel="noreferrer">Elementary School</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jenjangonl24;
