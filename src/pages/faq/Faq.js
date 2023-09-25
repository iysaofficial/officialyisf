import "../faq/Faq.css";
import PageTitle from "../../components/pagetitle/PageTitle";
import Footer from "../../components/Footer";

export default function Faq() {
  return (
    <>
      <PageTitle motherMenu="FAQ" activeMenu="" />

      <section className="faq-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <h2>After Register</h2>
              </div>
            </div>

            <div className="col-md-12">
              <div className="faq" id="accordion">
                {data.map((item, i) => (
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target={item.datatarget}
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-1"
                        >
                          <span className="badge">{item.no}</span>
                          {item.question}
                        </h5>
                      </div>
                    </div>
                    <div
                      id={item.id}
                      class="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <br />
                <br />
                <h2>During the Event</h2>
              </div>
            </div>

            <div className="col-md-12">
              <div className="faq" id="accordion">
                {data2.map((item, i) => (
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target={item.datatarget}
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-1"
                        >
                          <span className="badge">{item.no}</span>
                          {item.question}
                        </h5>
                      </div>
                    </div>
                    <div
                      id={item.id}
                      class="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6 offset-md-3">
              <div className="faq-title text-center pb-3">
                <br />
                <br />
                <h2>After the Event</h2>
              </div>
            </div>

            <div className="col-md-12">
              <div className="faq" id="accordion">
                {data3.map((item, i) => (
                  <div className="card">
                    <div className="card-header" id="faqHeading-1">
                      <div className="mb-0">
                        <h5
                          className="faq-title"
                          data-toggle="collapse"
                          data-target={item.datatarget}
                          data-aria-expanded="true"
                          data-aria-controls="faqCollapse-After-1"
                        >
                          <span className="badge">{item.no}</span>
                          {item.question}
                        </h5>
                      </div>
                    </div>
                    <div
                      id={item.id}
                      class="collapse"
                      aria-labelledby="faqHeading-1"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

const data = [
  {
    no: "1",
    datatarget: "#faqCollapse-1",
    id: "faqCollapse-1",
    question: "Minsa, when will we get our LoA and Invoice? Where was it sent?",
    answer:
      "The committee will send LoA and Invoice no later than 7 working days after you register. We will send the LoA and Invoice to the team leaders email, so make sure you include a valid and correct email address!",
  },
  {
    no: "2",
    datatarget: "#faqCollapse-2",
    id: "faqCollapse-2",
    question:
      "Minsa, I registered a week ago but how come I have not received the LoA and Invoice yet?",
    answer:
      "Try checking the spam folder in your team leaders email, maybe the email from the IYSA team will go to the spam folder",
  },
  {
    no: "3",
    datatarget: "#faqCollapse-3",
    id: "faqCollapse-3",
    question: "Where to upload the competition file, Minsa?",
    answer:
      "Upload the files requested by the committee to the Google Drive link that we have included in your LoA, make sure you read the LoA carefully, OK!",
  },
  {
    no: "4",
    datatarget: "#faqCollapse-4",
    id: "faqCollapse-4",
    question:
      "I want to pay the registration fee but how come I can not find the invoice? and where is the payment transferred?",
    answer:
      "Come on, have you read LoA to the end yet? Because we will send the invoice with your teams LoA, make sure you have read the email from us to the end! For payment, you can transfer to the account listed on the invoice. Make sure you pay according to the nominal stated on the invoice, okay!",
  },
  {
    no: "5",
    datatarget: "#faqCollapse-5",
    id: "faqCollapse-5",
    question:
      "Minsa, I have already paid the registration fee. Where can I upload the proof of payment?",
    answer:
      "If you have made a payment, you can upload the proof to the link listed on the invoice, and make sure you fill in and upload the proof of transfer correctly so that the committee can record it correctly too",
  },
  {
    no: "6",
    datatarget: "#faqCollapse-6",
    id: "faqCollapse-6",
    question: "When will the receipt be sent to us?",
    answer:
      "We will send a receipt for payment in a maximum of 7 working days to the team leaders email, after you have uploaded proof of payment!",
  },
  {
    no: "7",
    datatarget: "#faqCollapse-7",
    id: "faqCollapse-7",
    question:
      "Minsa, one more week for judging, how come I have not received my teams presentation schedule yet?",
    answer:
      "We will send the online participant presentation schedule no later than 2 days before the judging takes place to the whatsapp group and also the team leaders email. Make sure you diligently check the information we provide on the Whatsapp group and also email!",
  },
];

const data2 = [
  {
    no: "1",
    datatarget: "#faqCollapse-During-1",
    id: "faqCollapse-During-1",
    question: "When will the presentation schedule be given by the committee?",
    answer:
      "We will provide a presentation schedule no later than 2 days before the judging takes place or it could be earlier, and we will send it via the WA group and also the team leaders e-mail.",
  },
  {
    no: "2",
    datatarget: "#faqCollapse-During-2",
    id: "faqCollapse-During-2",
    question:
      "What application used for online presentation? Zoom, Google Meet or something else?",
    answer:
      "For online judging, we always use the Zoom application and make sure your Zoom application is up to date.",
  },
  {
    no: "3",
    datatarget: "#faqCollapse-During-3",
    id: "faqCollapse-During-3",
    question: "When will the zoom link be given by the committee?",
    answer:
      "We will provide a Zoom link on the judging day, and we will send it periodically to the group according to your teams presentation time",
  },
  {
    no: "4",
    datatarget: "#faqCollapse-During-4",
    id: "faqCollapse-During-4",
    question: "how many zoom accounts can join and what should i set my name",
    answer:
      'You can enter Zoom with a maximum of 5 accounts for participants, and all Zoom accounts must follow the name format that we have provided, namely "Room Number_Team Leader Name_Institution Name"',
  },
  {
    no: "5",
    datatarget: "#faqCollapse-During-5",
    id: "faqCollapse-During-5",
    question: "how long will the participants make the presentation?",
    answer:
      "You will be given 15 minutes for 1 presentation session which will be divided into 2, namely the initial 7 minutes for the presentation and the final 8 minutes for the question and answer session with the jury",
  },
  {
    no: "6",
    datatarget: "#faqCollapse-During-6",
    id: "faqCollapse-During-6",
    question: "How many judges will come to the offline participants booth?",
    answer:
      "Just like online judging, there will be 2 judges judging each team. And after being judged you will be given a sticker as a sign that your booth has been judged, make sure you get 2 stickers",
  },
  {
    no: "7",
    datatarget: "#faqCollapse-During-7",
    id: "faqCollapse-During-7",
    question: "Can we tidy up our booth after being judged?",
    answer:
      "You can start tidying up the booth when all the teams have finished being judged, so if you have finished judging you can visit the booths of other participants first",
  },
];

const data3 = [
  {
    no: "1",
    datatarget: "#faqCollapse-After-1",
    id: "faqCollapse-After-1",
    question: "When will the winners be announced?",
    answer:
      "Announcement of winners is held on the last day of each event, you can check the date on the schedule listed in the Guide Book.",
  },
  {
    no: "2",
    datatarget: "#faqCollapse-After-2",
    id: "faqCollapse-After-2",
    question: "Where can we see the winning results?",
    answer:
      "You can check the final results on the official website of the event you are participating in.",
  },
  {
    no: "3",
    datatarget: "#faqCollapse-After-3",
    id: "faqCollapse-After-3",
    question: "When will the E-certificate be sent?",
    answer:
      "IYSA DOES NOT send E-Certificates to National participants or Indonesian Participants who take part in online events. Online National Participants will only receive a certificate in printed/hard form which will later be sent along with the medals via the JNE expedition.",
  },
  {
    no: "4",
    datatarget: "#faqCollapse-After-4",
    id: "faqCollapse-After-4",
    question: "When is the online delivery of participant certificates?",
    answer:
      "The certificate will be sent no later than one month after the announcement of the winner. You can periodically check the delivery receipt that we sent on the Whatsapp group whether your certificate has been sent or not.",
  },
  {
    no: "5",
    datatarget: "#faqCollapse-After-5",
    id: "faqCollapse-After-5",
    question: "Where can we get a supervisor certificate?",
    answer:
      "You can see and download the supervisor certificate on the official website of the event you are participating in.",
  },
  {
    no: "6",
    datatarget: "#faqCollapse-After-6",
    id: "faqCollapse-After-6",
    question: "How to do medal doubling?",
    answer:
      "For offline participants, you can immediately duplicate the medals on the spot after the announcement of the winners takes place. And for online participants, you can duplicate the medals via the link we sent on the Whatsapp group, we will send duplicate information on the Whatsapp group no later than 2 days after the announcement of the winner.",
  },
];
