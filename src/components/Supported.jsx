import "./css/supported.css";

export default function Supported() {
    const dataLogo = [
        "images/logo/iysa.png",
        "images/logo/undip.png",
        "images/logo/buca.png",
    ]
    return (
        <>
            <section className="section pt-0 position-relative pull-top">
                <div className="container">
                    <div className="rounded shadow p-5 bg-white">
                        <div className="row">

                            {
                                dataLogo.map(function(ImgLogo) {
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
