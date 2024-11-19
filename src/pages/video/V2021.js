import PageTitle from "../../components/pagetitle/PageTitle";

function V2021() {
  const DataVideo = [
    "https://www.youtube.com/embed/sSqidjSHxw0",
    "https://www.youtube.com/embed/YxEab0dey0E",
    "https://www.youtube.com/embed/nvZMxyNSj6Q",
  ];

  return (
    <>
      <PageTitle motherMenu="Video" menuback="Home" backbtn="/" activeMenu="" />
      <div className="section">
        <div className="container-fluid">
          <div className="col-md-12">
            <h1 className="text-center mb-5 fw-bold">2021</h1>

            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  {DataVideo.map(function (Vid2021) {
                    return (
                      <div className="col-md-4 mt-2">
                        <iframe
                          title="21"
                          src={Vid2021}
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

export default V2021;
