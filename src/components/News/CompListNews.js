import React, { Component } from "react";

import gambar1 from "../../Images/News/PenelitiSMAMuhammadiyah.WebP";
import gambar2 from "../../Images/News/GuruMuda.WebP";
import gambar3 from "../../Images/News/UDINUSSemarangTuanRumah.WebP";
import gambar4 from "../../Images/News/FTUB.WebP";
import gambar5 from "../../Images/News/MCC.WebP";
import gambar6 from "../../Images/News/SMAN-1-Denpasar.WebP";
import gambar7 from "../../Images/News/sman3.jpeg";
import gambar8 from "../../Images/News/TimmahasiswaUnisma.jpg";

class CompListNews extends Component {
  render() {
    return (
      <>
        <section className="newspage-section">
          <h1 className="text-center mt-2 fw-bold">NEWS</h1>
          <div className="wrapper container mt-4">
            <div className="row">
              {/*Card Awal*/}
              <div className="card col-lg-3 m-3">
                <img
                  src={gambar8}
                  className="card-img-top img-fluid p-2"
                  alt="Gambar Berita 3"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://timesindonesia.co.id/pendidikan/528337/mahasiswa-unisma-malang-borong-prestasi-di-ajang-sains-internasional-yisf-2025"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Unisma Malang students make achievements in YISF 2025
                      international science event
                    </a>
                  </h5>
                  <p className="card-text">
                    TIMESINDONESIA, MALANG - Proud achievements were made by
                    students of the Islamic University of Malang (Unisma). 4
                    Unisma student teams succeeded in buying up champions at the
                    2025 Youth International Science Fair (YISF). The 4 teams
                    managed to bring home silver and bronze medals in various
                    categories.
                  </p>

                  <br></br>

                  <h1 className="btn-primary btn">
                    <a
                      href="https://timesindonesia.co.id/pendidikan/528337/mahasiswa-unisma-malang-borong-prestasi-di-ajang-sains-internasional-yisf-2025"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </h1>
                </div>
              </div>
              {/*Card Akhir*/}
              {/*Card Awal*/}
              <div className="card col-lg-3 m-3">
                <img
                  src={gambar7}
                  className="card-img-top img-fluid p-2"
                  alt="Gambar Berita 3"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a
                      href="https://jatim.antaranews.com/berita/887401/tim-sman-3-taruna-angkasa-raih-dua-medali-emas-di-yisf-2025"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SMAN 3 Taruna Angkasa team wins two gold medals at YISF
                      2025
                    </a>
                  </h5>
                  <p className="card-text">
                    Surabaya (ANTARA) - The research team from SMAN 3 Taruna
                    Angkasa Madiun won two gold medals in the Youth
                    International Science Fair (YISF) 2025 held at State
                    University of Malang on February 21-24, 2025.
                  </p>

                  <br></br>

                  <h1 className="btn-primary btn">
                    <a
                      href="https://jatim.antaranews.com/berita/887401/tim-sman-3-taruna-angkasa-raih-dua-medali-emas-di-yisf-2025"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </h1>
                </div>
              </div>
              {/*Card Akhir*/}
              {/* List 3 akhir */}
              <div className="card col-lg-3 m-3">
                <img
                  src={gambar5}
                  className="card-img-top img-fluid p-2"
                  alt="Gambar Berita 3"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/news6">
                      Keren, 5 Siswa SMA Negeri 4 Denpasar Raih penghargaan
                      “Best Poster” dan “Gold Medali” Innovation Science YISF
                      2024
                    </a>
                  </h5>
                  <p className="card-text">
                    Suatu kebanggan bagi 5 siswa berprestasi yang berasal dari
                    SMA Negeri 4 Denpasar, karena berhasil menyabet dua
                    penghargaan sekaligus di ajang YISF (Youth Internasional
                    Science Fair) yang diadakan oleh IYSA (Indonesia Young
                    Scientist Association)...
                  </p>

                  <br></br>

                  <h1 className="btn-primary btn">
                    <a href="/news6">Read more</a>
                  </h1>
                </div>
              </div>
              {/* List 3 akhir */}
              {/* List 4 awal */}
              <div className="card col-lg-3 m-3">
                <img
                  src={gambar6}
                  className="card-img-top img-fluid p-2"
                  alt="Gambar Berita 4"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/news7">
                      Inovasi Irovit Bites Menangkan SMAN 1 Denpasar di YISF
                      2024
                    </a>
                  </h5>
                  <p className="card-text">
                    SMAN 1 Denpasar telah mencetak prestasi gemilang dengan
                    meraih gelar juara dalam Youth International Science Fair
                    (YISF) 2024 dengan kreasi revolusioner berjudul "Irovit
                    Bites: Camilan Cokelat Penuh Manfaat untuk Anemia dan
                    Kekebalan Tubuh"...
                  </p>

                  <br></br>

                  <h1 className="btn-primary btn">
                    <a href="/news7">Read more</a>
                  </h1>
                </div>
              </div>
              {/* List 4 akhir */}
              {/* list 1 awal */}
              <div className="card col-lg-3 m-3">
                <img
                  src={gambar1}
                  className="card-img-top img-fluid p-2"
                  alt="Gambar Berita 1"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/news1">
                      Muhiba High School Yogyakarta Students Win Silver Medals
                      at YISF International Event 2023
                    </a>
                  </h5>
                  <p className="card-text">
                    The research team in the field of research and writing of
                    teenagers of SMA Muhammadiyah Bantul (Muhiba) Yogyakarta
                    succeeded in making achievements at an international event
                  </p>

                  <h1 className="btn-primary btn">
                    <a href="/news1">Read more</a>
                  </h1>
                </div>
              </div>
              {/* list 1 akhir */}
              {/* List 2 awal */}
              <div className="card col-lg-3 m-3">
                <img
                  src={gambar2}
                  className="card-img-top img-fluid p-2"
                  alt="Gambar Berita 2"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/news2">
                      Young Teachers from Corners of Central Kalimantan Achieve
                      Achievements at YISF Bali
                    </a>
                  </h5>
                  <p className="card-text">
                    SUGENG Santoso, a young teacher at SMPS 11 Best Agro Pulang
                    Pisau (Pulpis) sparked a digital application to open a
                    discussion space for teachers.
                  </p>

                  <h1 className="btn-primary btn">
                    <a href="/news2">Read more</a>
                  </h1>
                </div>
              </div>
              {/* List 2 akhir */}
              {/*Card Awal*/}
              <div className="card col-lg-3 m-3">
                <img
                  src={gambar3}
                  className="card-img-top img-fluid p-2"
                  alt="Gambar Berita 3"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/news3">
                      Udinus Invited to Host YNSF and YISF, Support Young
                      Inventors from Various Countries
                    </a>
                  </h5>
                  <p className="card-text">
                    Dian Nuswantoro University (Udinus) Semarang was asked to
                    host the Youth National Science Fair (YNSF) and Youth
                    International Science Fair (YISF).
                  </p>

                  <h1 className="btn-primary btn">
                    <a href="/news3">Read more</a>
                  </h1>
                </div>
              </div>
              {/*Card Akhir*/}
              {/*Card Awal*/}
              <div className="card col-lg-3 m-3">
                <img
                  src={gambar4}
                  className="card-img-top img-fluid p-2"
                  alt="Gambar Berita 4"
                ></img>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/news4">
                      FTUB Raih Triple Gold Medals di Young Invention Scientific
                      Fair 2021
                    </a>
                  </h5>
                  <p className="card-text">
                    SECRETARY UB Electrical Engineering Department, Rosa,
                    explained, the first team was led by Ihza Aulia Rahman
                    (TE'18). Joined the Legi Techno Team.
                  </p>

                  <h1 className="btn-primary btn">
                    <a href="/news4">Read more</a>
                  </h1>
                </div>
              </div>
            </div>
            {/*Card Akhir*/}
          </div>
        </section>
      </>
    );
  }
}
export default CompListNews;
