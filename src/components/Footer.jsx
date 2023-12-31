import "./css/Footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div class="footer-main mt-5">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-12 m-md-auto align-self-center">
                <div class="block">
                  <a href="index.html">
                    <img
                      src="images/logo/YISF-White.png"
                      className="img-fluid f-img"
                      alt="footer-logo"
                    />
                  </a>
                  {/* <!-- Social Site Icons --> */}
                  <ul class="social-icon list-inline">
                    <li class="list-inline-item">
                      <a
                        href="https://www.facebook.com/iysa.ina.5/"
                        target="_blank"
                      >
                        <i class="ti-facebook"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="https://www.youtube.com/channel/UC6-Hq4AnYbwiQWz7XemEwKw"
                        target="_blank"
                      >
                        <i class="ti-youtube"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a
                        href="https://www.instagram.com/iysa_official/"
                        target="_blank"
                      >
                        <i class="ti-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div class="block-2">
                  {/* <!-- heading --> */}
                  <h6>Gallery</h6>
                  {/* <!-- links --> */}
                  <ul>
                    <li>
                      <a href="https://drive.google.com/drive/folders/1tDJHRUN6k0AQX_cG01zNlPUZXPrK5pRN?usp=drive_link">Photo 2022</a>
                    </li>
                    <li>
                      <a href="https://drive.google.com/drive/folders/1DBhEkKvKIb85-D-7h3dN6xvymlDRYAFv?usp=drive_link">Photo 2023</a>
                    </li>
                    <li>
                      <a href="/V2022">Video 2022</a>
                    </li>
                    <li>
                      <a href="/V2023">Video 2023</a>
                    </li>
                    {/* <li><a href="/G2022">Video 2023</a></li> */}
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div class="block-2">
                  {/* <!-- heading --> */}
                  <h6>Pages</h6>
                  {/* <!-- links --> */}
                  <ul>
                    <li>
                      <a href="/about">About</a>
                    </li>
                    <li>
                      <a href="/PageNewsList">News</a>
                    </li>
                    <li>
                      <a href="/faq">FAQ</a>
                    </li>
                    <li>
                      <a href="/document_writter">Documents Required</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
                <div class="block-2">
                  {/* <!-- heading --> */}
                  <h6>Contact</h6>
                  {/* <!-- links --> */}
                  <ul>
                    <li>
                      <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                      <a href="/guidebook">Guide Book</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
