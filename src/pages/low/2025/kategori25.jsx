import React from "react";
import PageTitle from "../../../components/pagetitle/PageTitle";

const Kategori25 = () => {
  return (
    <>
      <PageTitle motherMenu="List of Winners" activeMenu="/ list of winners" />

      <section className="faq-section">
        <div className="container text-center">
            <h1>Choose based on the Category of the event you are participating in</h1>
          <div className="hero-btn text-center">
            <a className="btn m-2" href="https://drive.google.com/file/d/1lsZt8Db3qRWIUnh-puCs0SMcm9Z0EWyO/view?usp=sharing" target="_blank" rel="noreferrer">SPECIAL AWARD ONLINE</a>
            {/* <a className="btn m-2" href="/jenjangonl25">YISF ONLINE</a> */}
            <a className="btn m-2" href="https://drive.google.com/file/d/1oaW4bw3cUrd2sX2yC2mbDIiU9lf9TRgQ/view?usp=sharing" target="_blank" rel="noreferrer">YISF ONLINE</a>
            <a className="btn m-2" href="https://drive.google.com/file/d/1TNx_XfX91CgyZWmrmRkqjW9oUZvQlkzt/view?usp=sharing" target="_blank" rel="noreferrer">SPECIAL AWARD OFFLINE</a>
            <a className="btn m-2" href="/jenjangofl25">YISF OFFLINE</a>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Kategori25;
