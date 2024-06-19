import "../components/css/Contact.css";
import PageTitle from "../components/pagetitle/PageTitle";




export default function Contact() {
  return (
    <>
      <PageTitle motherMenu="Contact" activeMenu="" />
      <div className="container">
        <div className="col-md-12 mt-5 contact">
          <div className="card mt-5 contact">
            <div className="row">


<section className="her mt-5">
      <div className="container">
        <div id="kontak" class="contact">
          <div class="container">
            <div class="contact-box">
              <div class="box">
                <div class="form-contact">
                  <form action="https://formspree.io/f/mvoeeeva" method="POST">
                    <table>
                      <tr>
                        <td>
                          <input
                            type="text"
                            name="First Name"
                            placeholder="First Name"
                            required
                            autocomplete="off"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="Lash Name"
                            placeholder="Lash Name"
                            autocomplete="off"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <input
                            type="email"
                            name="email"
                            placeholder=" Your Email"
                            required
                            autocomplete="off"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <textarea
                            name="text"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                            required
                          ></textarea>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <button
                            type="submit"
                            value="send"
                            onclick="return confirm"
                            className="btn-contact btn btn-primary"
                          >
                            Send
                          </button>
                        </td>
                      </tr>
                    </table>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


              <div className="col-md-6">
                <img
                  src="images/vektor/mechanis3.png"
                  className="img-fluid"
                  alt=""
                ></img>
              </div>

              <div className="col-md-6">
                <div className="mt-5">
                  <div className="row">
                    <div className="col-md-4">
                      <h3>Call</h3>
                    </div>

                    <div className="col-md-6">
                      <a href="https://api.whatsapp.com/send/?phone=6281770914129&text&type=phone_number&app_absent=0">
                        0817 - 7091 - 4129
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="row">
                    <div className="col-md-4">
                      <h3>Address</h3>
                    </div>
                    <div className="col-md-6">
                      <a href="https://goo.gl/maps/9x18coXGCmSscKec6">
                        Jalan Kemang NO. 63 RT. 03/RW. 06 Kel. Pasir Putih,
                        Sawangan Depok, Jawa Barat 16519, Indonesia.
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="row">
                    <div className="col-md-4">
                      <h3>Email</h3>
                    </div>
                    <div className="col-md-6">
                      <a href="mailto:youthscience.yisf@gmail.com">
                        youthscience.yisf@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
