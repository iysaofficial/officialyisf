import React, { Component } from "react";
import Footer from "../Footer";

import gambar1 from "../../Images/News/PenelitiSMAMuhammadiyah.WebP";
import gambar2 from "../../Images/News/GuruMuda.WebP";
import gambar3 from "../../Images/News/UDINUSSemarangTuanRumah.WebP";
import gambar4 from "../../Images/News/FTUB.WebP";

class CompListNews extends Component {
  render() {
    return (
      <>
        <body>
          <h1 className="text-center mt-2 fw-bold">NEWS</h1>
          <div class="container mt-4">
            <div class="row">
              {/* list 1 awal */}
              <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class="card">
                  <img
                    src={gambar1}
                    class="card-img-top img-fluid p-2"
                    alt="Gambar Berita 1"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="/news1">
                        Muhiba High School Yogyakarta Students Win Silver Medals
                        at YISF International Event 2023
                      </a>
                    </h5>
                    <p class="card-text">
                      The research team in the field of research and writing of
                      teenagers of SMA Muhammadiyah Bantul (Muhiba) Yogyakarta
                      succeeded in making achievements at an international event
                    </p>

                    <h1 className="btn-primary btn">
                      <a href="/news1">Read more</a>
                    </h1>
                  </div>
                </div>
              </div>
              {/* list 1 akhir */}
              {/* List 2 awal */}
              <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class="card">
                  <img
                    src={gambar2}
                    class="card-img-top img-fluid p-2"
                    alt="Gambar Berita 2"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="/news2">
                        Young Teachers from Corners of Central Kalimantan
                        Achieve Achievements at YISF Bali
                      </a>
                    </h5>
                    <p class="card-text">
                      SUGENG Santoso, a young teacher at SMPS 11 Best Agro
                      Pulang Pisau (Pulpis) sparked a digital application to
                      open a discussion space for teachers.
                    </p>

                    <h1 className="btn-primary btn">
                      <a href="/news2">Read more</a>
                    </h1>
                  </div>
                </div>
              </div>
              {/* List 2 akhir */}
              {/* List 3 awal */}
              <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class="card">
                  <img
                    src={gambar3}
                    class="card-img-top img-fluid p-2"
                    alt="Gambar Berita 3"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="/news3">
                        Udinus Invited to Host YNSF and YISF, Support Young
                        Inventors from Various Countries
                      </a>
                    </h5>
                    <p class="card-text">
                      Dian Nuswantoro University (Udinus) Semarang was asked to
                      host the Youth National Science Fair (YNSF) and Youth
                      International Science Fair (YISF).
                    </p>

                    <h1 className="btn-primary btn">
                      <a href="/news3">Read more</a>
                    </h1>
                  </div>
                </div>
              </div>
              {/* List 3 akhir */}

              {/* List 4 awal */}
              <div class="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div class="card">
                  <img
                    src={gambar4}
                    class="card-img-top img-fluid p-2"
                    alt="Gambar Berita 4"
                  ></img>
                  <div class="card-body">
                    <h5 class="card-title">
                      <a href="/news4">
                        FTUB Raih Triple Gold Medals di Young Invention
                        Scientific Fair 2021
                      </a>
                    </h5>
                    <p class="card-text">
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
              {/* List 4 akhir */}
            </div>
          </div>
        </body>
        <Footer />
      </>
    );
  }
}
export default CompListNews;
