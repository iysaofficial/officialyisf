import "../../components/css/News.css";
import PageTitleNews from "../../components/pagetitle/PageTitleNews";
import gambar from "../../Images/News/FTUB.WebP";

function News4() {
  return (
    <>
      <PageTitleNews motherMenu="Media Coverage" activeMenu="" />
      <div className="mt-5">
        <section className="feature section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ml-auto justify-content-center text-center">
                <img className="img-fluid" src={gambar} alt="" />
              </div>
              <div className="col-lg-6 mr-auto align-self-center">
                <div className="feature-content">
                  {/* <!-- About Title --> */}

                  <h2>
                    <b>
                      FTUB Raih Triple Gold Medals di Young Invention Scientific
                      Fair 2021
                    </b>
                  </h2>

                  {/* <!-- About Description --> */}

                  <p className="desc">
                    SECRETARY UB Electrical Engineering Department, Rosa,
                    explained, the first team was led by Ihza Aulia Rahman
                    (TE'18). Joined the Legi Techno Team. He was assisted by his
                    colleague; Abdul Mudjib Sulaiman W (TM'18), Rizki Chandra
                    Maulana (TE'18), Anima Rahmatika P (Chemistry'18), and
                    Charis Maulana (Machinery'19). The five of them performed a
                    work called Rotation.
                    <br />
                    <br />
                    "Rotation is an innovation that utilizes reverse osmosis and
                    thermoelectricity to convert industrial heat waste into
                    electrical energy and clean water," he explained, Tuesday
                    (27/04/2021).The second team, chaired by Yudika Putra
                    Perdana Pangaribu (TE'19). Yudika and his team created the
                    Agricultural Expansion (Agri-X) application.
                    <br />
                    <br />
                    AGRI-X is predicted to be an application of millennial
                    generation innovation in improving the welfare and capacity
                    of farmers in supporting food self-sufficiency in
                    Indonesia.In making this application, Yudika collaborated
                    with Cecilia Fauziah and Anton Meilus Putra (Faculty of
                    Agriculture), Rhobithotus Mufidah (Faculty of Fisheries and
                    Marine Sciences), and Rifqi Aqil Asyrof (Faculty of
                    Economics and Business).
                    <br />
                    <br />
                    The third team, chaired by Adrian Adam Indrabayu (TE'19).
                    Together with his team, he created an artificial
                    photosynthesis system called Fetallic. Fetallic was made
                    with four colleagues, Yudika Putra PP (TE'19), Kenny
                    Aldebaran Roberts (TE'19), Adita Aulia A Rachman (TE'19),
                    and Erina Azahra Amalia (Tekim'19).
                    <br />
                    <br />
                    "Fetallic is able to reduce carbon dioxide emissions, even
                    able to convert it into electrical energy," explained
                    Rosa.These three teams are the guidance team of one of the
                    Electrical Engineering lecturers, Ir. Nurussa'adah
                    M.T."Alhamdulillah, the three of them can take part in
                    international events. Hopefully we can continue to work,
                    provide enthusiasm and motivation for other students," hoped
                    Secretary of the Department of Electrical Engineering, Rosa.
                    <br />
                    <br />
                    YISF 2021 is one of a series of activities held by the
                    Indonesian Young Scientist Association (IYSA), in
                    collaboration with BUCA IMSEF, Turkey, Malaysia Innovation
                    Invention Creativity Association (MIICA), The Union of Arab
                    Academics, Actuarial Department of Institut Teknologi
                    Sepuluh Nopember, and Science Hunter Indonesia.
                  </p>
                  <p>
                    Source :{" "}
                    <a
                      href="https://tabloidjawatimur.com/ftub-raih-triple-gold-medals-di-young-invention-scientific-fair-2021/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      click here
                    </a>
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

export default News4;
