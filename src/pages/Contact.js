import "../components/css/Contact.css";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <>
            <div className="container">
                <div className="col-md-12 mt-5 contact">
                    <h1 className="text-center">Contact</h1>


                    <div className="card mt-5 contact">
                        <div className="row">

                            <div className="col-md-6">
                                <img src="images/vektor/mechanis3.png" className="img-fluid"></img>
                            </div>

                            <div className="col-md-6">

                                <div className="mt-5">

                                        <div className="row">
                                            <div className="col-md-4">
                                                <h3>Call</h3>
                                            </div>

                                            <div className="col-md-6">
                                                <a href="https://api.whatsapp.com/send/?phone=6281770914129&text&type=phone_number&app_absent=0">0817 - 7091 - 4129</a>
                                            </div>
                                        </div>

                                </div>

                                <div className="mt-5">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <h3>Address</h3>
                                        </div>

                                        <div className="col-md-6">
                                            <a href="https://goo.gl/maps/9x18coXGCmSscKec6">Jalan Kemang
                                                NO. 63 RT. 03/RW. 06
                                                Kel. Pasir Putih, Sawangan Depok, Jawa Barat 16519, Indonesia.</a>
                                        </div>
                                    </div>

                                </div>

                                <div className="mt-5">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <h3>Email</h3>
                                        </div>

                                        <div className="col-md-6">
                                            <a href="mailto:youngscientist.iysa@gmail.com" >youngscientist.iysa@gmail.com</a>
                                        </div>
                                    </div>

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