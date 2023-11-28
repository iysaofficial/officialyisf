import Footer from "../../components/Footer";
import PageTitle from "../../components/pagetitle/PageTitle";

function V2023() {

    
    const DataVideo = [
        "https://www.youtube.com/embed/utETSifJsu0?si=SqU2VQXFNc8PwTg9",
        "https://www.youtube.com/embed/tnJD1Cf65lU?si=WC5MUpKeKWFVbuuU",
        "https://www.youtube.com/embed/EtPd81AZv8Y",
        "https://www.youtube.com/embed/CWAMmOK94sk",
        "https://www.youtube.com/embed/OmjuhStDNjA?si=Xqo8iLUUJYvmwT_3",
        "https://www.youtube.com/embed/NEq0ayJposg",
        "https://www.youtube.com/embed/7Ur5t4noeWA?si=kSeiCUFm7o81EHlK",
    ]

    return (
        <>
        <PageTitle motherMenu="Video" activeMenu="" />
            <div className="section">
                <div className="container-fluid">
                    <div className="col-md-12">
                        <h1 className="text-center mb-5 fw-bold">2023</h1>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                {
                                    DataVideo.map(function(Vid2023){
                                        return(

                                            <div className="col-md-3 mb-3">
                                                <iframe className="" src={Vid2023} style={{ width: '100%', height: '200px'}}></iframe>
                                            </div>

                                        )
                                    })
                                }      
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default V2023;