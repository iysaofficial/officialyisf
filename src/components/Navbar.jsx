export default function Navbar() {
    return (
        <>
            <div>
                <nav className="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0">
                    <div className="container">

                        <a className="navbar-brand" href="/">
                            <img src="images/logo/YISF.png" className="img-fluid" alt="logo" />
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="ti-menu"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
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
                                    <a className="nav-link" href="/About">About</a>
                                </li>
                                <li className="nav-item dropdown @@MediaCoverage">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Media Coverage
                                        <span>
                                            <i className="ti-angle-down"></i>
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="/PageNewsList">News</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown @@Curation">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Curation
                                        <span>
                                            <i className="ti-angle-down"></i>
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/drive/folders/1WjGM5OSjP45zDteA25QGpzao6S2_up-K?usp=sharing" target="_blank" >Curation 2021</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/drive/folders/12tsviA3OntYF_wWU2U3cz8HnCOgJy4OY?usp=sharing" target="_blank" >Curation 2022</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/drive/folders/1WmX5U44vX02B0uK2BmER5yMQ4LAwVoWO?usp=sharing" target="_blank" >Curation 2023</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown @@gallery">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Gallery
                                        <span>
                                            <i className="ti-angle-down"></i>
                                        </span>
                                    </a>
                                    {/* <!-- Dropdown list --> */}
                                    <ul className="dropdown-menu">

                                        <li className="dropdown dropdown-submenu dropleft">
                                            <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Photo</a>

                                            <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                                                <li>
                                                    <a className="dropdown-item" href="https://drive.google.com/drive/folders/1PPIfqv01uc_aCCpWO-nzwIF1rq9_Bvk9?usp=drive_link" target="_blank"> 2021</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="https://drive.google.com/drive/folders/1tDJHRUN6k0AQX_cG01zNlPUZXPrK5pRN?usp=drive_link" target="_blank"> 2022</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="https://drive.google.com/drive/folders/1DBhEkKvKIb85-D-7h3dN6xvymlDRYAFv?usp=drive_link" target="_blank"> 2023</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="dropdown dropdown-submenu dropleft">
                                            <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Video</a>

                                            <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                                                <li>
                                                    <a className="dropdown-item" href="/V2021"> 2021</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/V2022"> 2022</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/V2023"> 2023</a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item dropdown @@finalresult">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> List of Winner
                                        <span>
                                            <i className="ti-angle-down"></i>
                                        </span>
                                    </a>
                                    {/* <!-- Dropdown list --> */}
                                    <ul className="dropdown-menu">
                                        {/* <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1HPiaUAl3iFBxHMJdPrd_dHIvoD7fEiIA/view?usp=drive_link" target="_blank" >List Finalist 2021</a>
                                        </li> */}
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/12qBBGuwVnmt46IwSCNzNHJd7SzcheU59/view?usp=sharing" target="_blank" >List of Winner 2021</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1AI9WIFZq9R_aPHzddfDs3gzmw-aZebt_/view?usp=sharing" target="_blank" >List of Winner 2022</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1pmM-RuvrQ0_C3IGqEntU56xZ-xjnSDth/view?usp=sharing" target="_blank" >List of Winner 2023</a>
                                        </li>

                                        {/* <li>
                                            <a className="dropdown-item" href="/certificate">Certificate Supervisor</a>
                                        </li> */}
                                        {/* <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1b1rjIcZ7ezfvXKFMUU3M3Ss-88MwtzqM/view?usp=share_link">Undip SA</a>
                                        </li> */}

                                        {/* <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1SBHFPWlQqSGymv-vdDWHPp1ZhqWpEwB9/view?usp=share_link">Social Science Category</a>
                                        </li> */}

                                        {/* <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1KqSRlmah-pY-f0EVb0xR69XtNTUHYsy9/view?usp=share_link">Life Sciences Category</a>
                                        </li> */}
                                        {/* <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1eeOq6zDzJFmML4aKumdrZKFNDucgkYnX/view?usp=share_link">Road To IFEST</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1Y47quiAj_yC067d7qEg5hoCaAXB1MQam/view?usp=share_link">MYSO SA </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1_tppS_UFa_dvzPrsbA8KKgHnNm14wIQi/view?usp=share_link"> MIICA SA</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1_qSq8hu2VM60QS2NQHhZuM6lMax2R-YJ/view?usp=share_link">IYSA SGA</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1_qSq8hu2VM60QS2NQHhZuM6lMax2R-YJ/view?usp=share_link">IYSA SA</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/18CPQXCw7rhPQGZM6SlyGEEna7YA_98MY/view?usp=share_link">IYSA GA</a>
                                        </li> */}
                                        {/* <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1QvahlcvKWdgskUwePNl5b-p4oc5MPa6b/view?usp=share_link">Innovation Sciences Category</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1vgZfhOM8B347Yw7ZcldxvYYSOE-NbPnL/view?usp=share_link">Environmental Sciencs Category Supervisor</a>
                                        </li> */}
                                        {/* <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/18x0EiIEM62bIjHAY99F8lQpaHTHhB9l4/view?usp=share_link"> Engineering</a>
                                        </li> */}
                                        {/* <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/17w6EaNcTxV-7aRapnkUH_oCTwuIGrNjE/view?usp=share_link">Cash Prize</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1-4-eqdw9pEEnOfdwyDO2NwCWI1ij10dF/view?usp=share_link">BUCA SA</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1FnuQYP6q7pNQHsbKWPIl16ZaMtmHEe4a/view?usp=share_link">Best Presentation</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/file/d/1YvZXkg7XWNtikxzCfkuPNOY7Nw-TT6n0/view?usp=share_link">Best Booth</a>
                                        </li> */}


                                    </ul>
                                </li>
                                <li className="nav-item dropdown @@certificate">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Certificate
                                        <span>
                                            <i className="ti-angle-down"></i>
                                        </span>
                                    </a>
                                    {/* <!-- Dropdown list --> */}
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/drive/folders/1e_Dviw-ne-7b8kDA9CFErqOXCMK7nlcV?usp=share_link" target="_blank" >Certificate supervisors</a>
                                        </li>

                                        <li>
                                            <a className="dropdown-item" href="https://drive.google.com/drive/folders/1AEb6fgNAWCo-LH1jOlfWpMqLFkzqYwj5?usp=share_link" target="_blank" >Cerificate Webinar</a>
                                        </li>




                                    </ul>
                                </li>
                                <li className="nav-item @@contact">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                                <li className="nav-item @@faq">
                                    <a className="nav-link" href="/faq">Faq</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}