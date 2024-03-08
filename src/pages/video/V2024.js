import Footer from "../../components/Footer";
import PageTitle from "../../components/pagetitle/PageTitle";

function V2024() {

    
    const DataVideo = [
        "https://www.youtube.com/embed/J5VxVopul5I?feature=share",
        "https://www.youtube.com/embed/xfqi6hhiCm0?feature=share",
        "https://www.youtube.com/embed/qeI3mXTwoQQ?feature=share",
        "https://www.youtube.com/embed/mpmHjqR0bd0?feature=share",
        "https://www.youtube.com/embed/C7qGHkB9jVs?feature=share",
    ]

    return (
        <>
        <PageTitle motherMenu="Video" activeMenu="" />
            <div className="section">
                <div className="container-fluid">
                    <div className="col-md-12">
                        <h1 className="text-center mb-5 fw-bold">2024</h1>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                {
                                    DataVideo.map(function(Vid2024){
                                        return(

                                            <div className="col-md-3 mb-3">
                                                <iframe className="" src={Vid2024} style={{ width: '100%', height: '200px'}}></iframe>
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

export default V2024;