import "../../components/css/News.css";
import PageTitleNews from "../../components/pagetitle/PageTitleNews";
import gambar1 from "../../Images/News/PenelitiSMAMuhammadiyah.WebP";

function News1() {
  return (
    <>
      <PageTitleNews motherMenu="Media Coverage" activeMenu="" />
      <div className="mt-5">
        <section className="feature section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 ml-auto justify-content-center">
                {/* <!-- About Mockup --> */}

                {/* <div className="image-content" data-aos="fade-right"> */}
                <img className="img-fluid" src={gambar1} alt="" />
                {/* </div> */}
              </div>
              <div className="col-lg-6 ">
                <div className="feature-content">
                  {/* <!-- About Title --> */}

                  <h2>
                    Muhiba High School Yogyakarta Students Win Silver Medals at
                    YISF International Event 2023
                  </h2>

                  {/* <!-- About Description -->} */}

                  <p className="desc">
                    <b></b>The research team in the field of research and
                    writing of teenagers of SMA Muhammadiyah Bantul (Muhiba)
                    Yogyakarta succeeded in making achievements at an
                    international event, namely the Youth International Science
                    Fair (YISF) 2023. The competition will be held online and
                    offline in Bali for 5 days 8 – 12 March 2023.
                    <br />
                    <br />
                    YISF is a hybrid competition organized by the Young
                    Scientist Association (IYSA) in collaboration with PGRI
                    Mahadwa Indonesia University (UPMI) Bali, Faculty of
                    Engineering, Diponegoro University and BUCA IMSEF Turkey and
                    attended by 673 teams from 23 countries. This event is a
                    creativity competition for elementary, junior high,
                    university and general levels which is expected to help
                    evaluate research results.
                    <br />
                    <br />
                    They are Vonny Rizanti Syairtha, Norma Nisa Yuny Fajar Ayu,
                    and Aisyah Naila Basuki won Silver Medals in the Engineering
                    Category by carrying out "N-VY SAVE: Movement Detection
                    Capsules with IoT Based Security". N-VY SAVE is a security
                    innovation with Internet of Thing (IoT)-based media to guide
                    pedestrians while on the road traffic.
                    <br />
                    <br />
                    N-VY SAVE consists of two devices, namely hardware and
                    software. This innovation is designed to reduce cases of
                    traffic accidents as well as being a guide, especially for
                    pedestrians who have a habit while playing devices.
                    <br />
                    <br />
                    When we joined YISF, said Vonny as Team Leader, we felt a
                    good competitive climate. Personally, I gained a lot, many
                    things, ranging from valuable experiences to new friends
                    from abroad."In the future, we will increase insight into
                    programming in C ++, the use of microcontrollers, especially
                    IoT, and MCU Node 32. We will continue to try to be even
                    better to win the gold medal in the next event." Close
                    Vonny.
                    <br />
                    <br />
                  </p>
                  <p>
                    Source :{" "}
                    <a
                      href="https://www.kompasiana.com/dikdasmenpwmdiy/640ecb1b3555e467503dcf64/siswa-sma-muhiba-yogyakarta-sabet-medali-silver-pada-ajang-internasional-yisf-2023"
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

export default News1;
