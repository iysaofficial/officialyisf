import PageTitle from "../../components/pagetitle/PageTitle";

function V2026() {
  const DataVideo = [
    "https://www.youtube.com/embed/wo9SRnOKWxA?si=5PujHDgeynkK_182",
    "https://www.youtube.com/embed/C5Q0nvWUw80?si=aBX6x4NjftHBvu8S",
    "https://www.youtube.com/embed/vuE0t6H-aN4?si=BYrKT_35-vaoht7w",
  ];

  return (
    <>
      <PageTitle motherMenu="Video" menuback="Home" backbtn="/" activeMenu="" />
      <div className="section">
        <div className="container-fluid">
          <div className="col-md-12">
            <h1 className="text-center mb-5 fw-bold">2026</h1>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  {DataVideo.map(function (Vid2026) {
                    return (
                      <div className="col-md-3 mb-3">
                        <iframe
                          title="26"
                          className=""
                          src={Vid2026}
                          style={{ width: "100%", height: "200px" }}
                        ></iframe>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default V2026;
