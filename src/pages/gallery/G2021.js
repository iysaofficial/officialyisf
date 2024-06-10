import Footer from "../../components/Footer";
import PageTitle from "../../components/pagetitle/PageTitle";

function G2021() {

    
    const DataLogo = [
        "images/gallery/2021/01.jpg",
        "images/gallery/2021/02.jpg",
        "images/gallery/2021/03.jpg",
        "images/gallery/2021/04.jpg",
        "images/gallery/2021/05.jpg",
        "images/gallery/2021/06.jpg",
        "images/gallery/2021/07.jpg",
        "images/gallery/2021/08.jpg",
        "images/gallery/2021/09.jpg",
        "images/gallery/2021/10.jpg",
        "images/gallery/2021/11.jpg",
        "images/gallery/2021/12.jpg",
        "images/gallery/2021/13.jpg",
        "images/gallery/2021/14.jpg",
        "images/gallery/2021/15.jpg",
        "images/gallery/2021/16.jpg",
        "images/gallery/2021/17.jpg",
        "images/gallery/2021/18.jpg",
        "images/gallery/2021/19.jpg",
        "images/gallery/2021/20.jpg",
        "images/gallery/2021/21.jpg"
    ]

    return (
        <>
        <PageTitle motherMenu="Galeri" activeMenu="" />
            <div className="section">
                <div className="container-fluid">
                    <div className="col-md-12">
                        <h1 className="text-center fw-bold">2021</h1>

                        <div className="row">

                            {
                                DataLogo.map(function(Gimg22) {
                                    return(
                                        <div className="col-md-2 mt-3">
                                            <div className="card">
                                                <img className="" src={Gimg22} alt=""></img>
                                            </div>
                                        </div>
                                    )
                                    
                                }) 
                                
                            }

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default G2021;