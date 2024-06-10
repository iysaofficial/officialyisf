import "../../components/css/News.css";
import PageTitleNews from "../../components/pagetitle/PageTitleNews";
import gambar7 from "../../Images/News/SMAN-1-Denpasar.WebP";

function News7() {
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
                <img className="img-fluid" src={gambar7} alt="" />
                {/* </div> */}
              </div>
              <div className="col-lg-6 ">
                <div className="feature-content">
                  {/* <!-- About Title --> */}

                  <h2>
                    Irovit Bites Innovation Wins SMAN 1 Denpasar at YISF 2024
                  </h2>

                  {/* <!-- About Description -->} */}

                  <p className="desc">
                    <b></b>
                    The team of five students created an innovative snack
                    product consisting of a mixture of sweet potato, spinach and
                    edamame processed with sugarless dark chocolate. Their
                    inspiration came from an awareness of the high cases of
                    anemia around the world, as well as a desire to provide
                    support and immune strengthening through healthy foods that
                    are easily accessible.
                    <br />
                    <br />
                    With the abundance of local ingredients in Indonesia, the
                    team successfully created IROVIT Bites as a solution to
                    overcome anemia and boost immunity. This product is not only
                    a means to reduce the impact of anemia, but also a real
                    contribution in raising awareness of the health benefits of
                    sweet potatoes. Their success in this competition not only
                    won the championship, but also provided valuable experience
                    in the exploration of science and the courage to innovate.
                    <br />
                    <br />
                    "I'm happy to be able to participate. It was my first time
                    participating in this competition and I didn't expect to
                    win. The impression is that I can get to know new people,
                    friends from other schools, and help myself to explore more
                    new things," said Ida Ayu Diah Komalamanik Manuaba, a member
                    of the SMAN 1 Denpasar Team when met at the MCC Malang
                    Building event location, Saturday (2/3/2024). The
                    prestigious YISF & YNSF 2024 event in Malang, organized by
                    IYSA, has provided a platform for Indonesia's young
                    generation to compete and hone their scientific talents.
                    <br />
                    <br />
                    Sebagai lembaga yang berfokus pada pengembangan potensi
                    siswa dan mahasiswa, IYSA telah memberikan kesempatan langka
                    bagi para peserta untuk menampilkan karya-karya cemerlang
                    mereka di tingkat nasional dan internasional. Tahun ini,
                    inovasi Irovit Bites dari SMAN 1 Denpasar berhasil mencuri
                    perhatian dan membawa pulang penghargaan bergengsi sebagai
                    bukti keunggulan anak muda di bidang sains dan teknologi
                    <br />
                    <br />
                  </p>
                  <p>
                    Source :{" "}
                    <a
                      href="https://timesindonesia.co.id/indonesia-positif/488468/inovasi-irovit-bites-menangkan-sman-1-denpasar-di-yisf-2024#google_vignette"
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

export default News7;
