import Footer from "../../components/Footer";
import PageTitle from "../../components/pagetitle/PageTitle";

function G2023() {
  const DataLogo = [
    "images/gallery/2023/th-12.JPG",
    "images/gallery/2023/th-13.JPG",
    "images/gallery/2023/th-14.JPG",
    "images/gallery/2023/th-15.JPG",
    "images/gallery/2023/th-16.JPG",
    "images/gallery/2023/th-17.JPG",
    "images/gallery/2023/th-18.JPG",
    "images/gallery/2023/th-19.JPG",
    "images/gallery/2023/th-20.JPG",
    "images/gallery/2023/th-21.JPG",
    "images/gallery/2023/th-22.JPG",
    "images/gallery/2023/th-23.JPG",
  ];

  return (
    <>
      <PageTitle motherMenu="Galeri" activeMenu="" />
      <div className="section">
        <div className="container-fluid">
          <div className="col-md-12">
            <h1 className="text-center fw-bold">2023</h1>

            <div className="row">
              {DataLogo.map(function (Gimg21) {
                return (
                  <div className="col-md-2 mt-3">
                    <div className="card">
                      <img className="" src={Gimg21} alt=""></img>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default G2023;
