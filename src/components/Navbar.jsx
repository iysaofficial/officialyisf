export default function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img
                src="images/logo/YISF.png"
                className="img-fluid"
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="ti-menu"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                {/* <li className="nav-item dropdown @@pages">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">About YISF
                                        <span>
                                            <i className="ti-angle-down"></i>
                                        </span> 
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="/about">About</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/document_writter">Documents Required</a>
                                        </li>


                                    </ul>
                                </li> */}

                <li className="nav-item">
                  <a className="nav-link" href="/About">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown @@MediaCoverage">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Media
                    <span>
                      <i className="ti-angle-down"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/PageNewsList">
                        News from Media
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://drive.google.com/file/d/1kbi8I-yo7wxnWYMQxOLsOlw7GgpYfAHr/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Press Release 2025
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://drive.google.com/file/d/1VMMP1vwq2f0mMrnuUHWoJHItQc6ly-Fl/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Press Release 2024
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://drive.google.com/file/d/1ETC7RxAhn6vyXn4Pzm6iJ13zZ40lHlbf/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Press Release 2023
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown @@Curation">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Curation
                    <span>
                      <i className="ti-angle-down"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://drive.google.com/drive/folders/12BqqyZ7kUYGxz4_VYTPpFpNGmRrFou5s?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Curation 2025
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://drive.google.com/drive/folders/14Q1z8L0Vi4SYGyQdALpmlcEjG2O7k84e?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Curation 2024
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://drive.google.com/drive/folders/14Q1z8L0Vi4SYGyQdALpmlcEjG2O7k84e?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Curation 2024
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://drive.google.com/drive/folders/1WmX5U44vX02B0uK2BmER5yMQ4LAwVoWO?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Curation 2023
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://drive.google.com/drive/folders/12tsviA3OntYF_wWU2U3cz8HnCOgJy4OY?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Curation 2022
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://drive.google.com/drive/folders/1WjGM5OSjP45zDteA25QGpzao6S2_up-K?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Curation 2021
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item @@low">
                  <a className="nav-link" href="/lowtahun">
                    List of Winners
                  </a>
                </li>
                <li className="nav-item dropdown @@certificate">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Certificate
                    <span>
                      <i className="ti-angle-down"></i>
                    </span>
                  </a>
                  {/* <!-- Dropdown list --> */}
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://drive.google.com/drive/folders/1amqbJ6xkLDjLk9-Cn9p4D7itnpqkBGGt?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Certificate supervisors 2025
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown @@gallery">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Gallery
                    <span>
                      <i className="ti-angle-down"></i>
                    </span>
                  </a>
                  
                  <ul className="dropdown-menu">
                    <li className="dropdown dropdown-submenu dropleft">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#!"
                        id="dropdown0501"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Photo
                      </a>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdown0501"
                      >
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://drive.google.com/drive/folders/1RZ89JUpnYxj2z6wwM6Y5T8QPn66_6DXQ?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            2025
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://drive.google.com/drive/folders/1XI9bn_oR9Q0yD_0cueLkPsR6fRdF0NRy?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            2024
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://drive.google.com/drive/folders/1DBhEkKvKIb85-D-7h3dN6xvymlDRYAFv?usp=drive_link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            2023
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://drive.google.com/drive/folders/1tDJHRUN6k0AQX_cG01zNlPUZXPrK5pRN?usp=drive_link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            2022
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="https://drive.google.com/drive/folders/1PPIfqv01uc_aCCpWO-nzwIF1rq9_Bvk9?usp=drive_link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            {" "}
                            2021
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown dropdown-submenu dropleft">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#!"
                        id="dropdown0501"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Video
                      </a>

                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdown0501"
                      >
                        <li>
                          <a className="dropdown-item" href="/V2024">
                            {" "}
                            2024
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/V2023">
                            {" "}
                            2023
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/V2022">
                            {" "}
                            2022
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/V2021">
                            {" "}
                            2021
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item @@contact">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item @@faq">
                  <a className="nav-link" href="/faq">
                    Faq
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
