import "./css/supported.css";

export default function Supported() {
    const dataLogo1 = [
        "images/logo/iysa.png"
    ]
    const dataLogo2 = [
        "images/logo/undip.png",
        // "images/logo/Udayana.png",
        "images/logo/buca.png",
    ]
    return (
        <>
            <section className="section pt-0 position-relative pull-top">
                <div className="container">
                    <div className="rounded shadow p-5 bg-white">
                        <div className="row">

                            {
                                dataLogo1.map(function(ImgLogo) {
                                    return(
                                        <div className="logo-iysa col-lg-4 col-md-4 mt-5 mt-md-0 text-center">
                                            <img className=" col-md-8" src={ImgLogo} />
                                        </div>
                                    )
                                })
                            }
                            { 
                                dataLogo2.map(function(ImgLogo) {
                                    return(
                                        <div className="Logo-Support col-lg-4 col-md-4 mt-5 mt-md-0 text-center">
                                            <img className=" col-md-8" src={ImgLogo} />
                                        </div>
                                    )
                                }) 
                            }

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
