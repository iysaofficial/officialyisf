import CurationNavbar from "../components/CurationNavbar"
import Footer from "../components/Footer";

function Curation1()
{

    const DataCrtImg1 = [
        "images/curation/1/page1.jpg",
        "images/curation/1/page2.jpg",
        "images/curation/1/page3.jpg",
        "images/curation/1/page4.jpg"
    ]
   
    return (
        <>
            <div className="mt-5">
                <div className="container">
                    <h2 className="text-center mb-3">Curation</h2>
                    <div className="col-md-12">
                        <div className="row">
                            
                            <CurationNavbar text="1" link="/curation1" />

                            <CurationNavbar text="3" link="/curation3" />

                            <CurationNavbar text="3(1)" link="/curation3_1" />

                            <CurationNavbar text="4" link="/curation4" />

                            <CurationNavbar text="11" link="/curation11" />

                            <CurationNavbar text="16" link="/curation16" />

                        </div>

                        
                        <div className="content-curation mt-3 ">
                            <div className="row">


                                {
                                    DataCrtImg1.map(function(Img1) {
                                        return(
                                            <div className="col-md-3">
                                                <div className="card">
                                                    <img src={Img1}></img>
                                                </div>
                                            </div>
                                        )
                                        
                                    }) 
                                    
                                }

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}

export default Curation1