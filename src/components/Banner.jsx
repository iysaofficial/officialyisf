import "./css/Banner.css";

export default function Banner() {
  return (
    <>
      <div>
        <section className="section gradient-banner">
          <div className="shapes-container">
            <div
              className="shape"
              data-aos="fade-down-left"
              data-aos-duration="1500"
              data-aos-delay="100"
            ></div>
            <div
              className="shape"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
            ></div>
            <div
              className="shape"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            ></div>
            <div
              className="shape"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            ></div>
            <div
              className="shape"
              data-aos="fade-down-left"
              data-aos-duration="1000"
              data-aos-delay="100"
            ></div>
            <div
              className="shape"
              data-aos="fade-down-left"
              data-aos-duration="1000"
              data-aos-delay="100"
            ></div>
            <div
              className="shape"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="300"
            ></div>
            <div
              className="shape"
              data-aos="fade-down-right"
              data-aos-duration="500"
              data-aos-delay="200"
            ></div>
            <div
              className="shape"
              data-aos="fade-down-right"
              data-aos-duration="500"
              data-aos-delay="100"
            ></div>
            <div
              className="shape"
              data-aos="zoom-out"
              data-aos-duration="2000"
              data-aos-delay="500"
            ></div>
            <div
              className="shape"
              data-aos="fade-up-right"
              data-aos-duration="500"
              data-aos-delay="200"
            ></div>
            <div
              className="shape"
              data-aos="fade-down-left"
              data-aos-duration="500"
              data-aos-delay="100"
            ></div>
            <div
              className="shape"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="0"
            ></div>
            <div
              className="shape"
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="0"
            ></div>
            <div
              className="shape"
              data-aos="fade-up-right"
              data-aos-duration="500"
              data-aos-delay="100"
            ></div>
            <div
              className="shape"
              data-aos="fade-down-left"
              data-aos-duration="500"
              data-aos-delay="0"
            ></div>
          </div>

          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-2 order-md-1 text-center text-md-left">
                <h1 className="text-white mb-4 banner-txt">
                  Youth International Science Fair
                </h1>
                <div class="hero-btn">
                  <a class="btn" href="/" >
                    Coming Soon!!!
                  </a>
                  <a
                    class="btn"
                    href="https://drive.google.com/file/d/1Ny4077hi2vrDv5aNYxKmCVnGLKUdg8HU/view?usp=sharing"
                    target="_blank"
                  >
                    Guide Book
                  </a>
                </div>
              </div>
              <div className="col-md-6 text-center order-1 order-md-2">
                <img
                  className="img-fluid"
                  src="images/banner/Banner_New.png"
                  alt="screenshot"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
