import "./ContactUs.css";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function ContactUs() {
  return (
    <>
<<<<<<< HEAD
      <Header></Header>
      <body>
        <div className="contact-us-body">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>
              <i>
                We would love to hear from you! <br />
                Whether you have questions about our services, want to discuss
                your event ideas, or just want to say hello, feel free to reach
                out to us. <br />
                Our team is here to assist you in making your dream event a
                reality.
              </i>
            </p>
            <h4>Contact Information:</h4>
            <p>
              Phone number:{" "}
              <b>
                <a href="tel:+27681928157">068 192 8157</a>
              </b>
              <br />
              Email Address:{" "}
              <b>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nompumelelohld@gmail.com">
                  nompumelelohld@gmail.com
                </a>
              </b>
              <br />
              <p>
                Click <a href="https://wa.me/27681928157">here</a> to message us
                on WhatsApp
              </p>
              Physical Address:
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.508093715912!2d28.217030874260068!3d-25.918536577253718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9568b990322b33%3A0xeb64d85875a8326d!2s22%20Mintaka%20Street%2C%20Midstream%20Estate%2C%20Olifantsfontein%2C%201668!5e0!3m2!1sen!2sza!4v1770677353077!5m2!1sen!2sza"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Lahlelo"
            ></iframe>
          </div>
        </div>
      </body>
      <Footer></Footer>
=======
      <div className="contact-page-wrapper">
        <Header/>
          <main className="contact-container">
              
              <div className="contact-header">
                <h1>Get in <span>Touch</span></h1>
                <p className="contact-intro">
                  <i>
                    We would love to hear from you! <br />
                    Whether you have questions about our services, want to discuss
                    your event ideas, or just want to say hello, feel free to reach
                    out to us. <br />
                    Our team is here to assist you in making your dream event a
                    reality.
                  </i>
                </p>
              </div>

              <div className="info-card">
                <h4>Phone number</h4>
                <a href="tel:+27681928157">068 192 8157</a>
              </div>

              <div className="info-card">
                <h4>Email address</h4>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lahlelocreativeevents@gmail.com">
                lahlelocreativeevents@gmail.com
                    </a>
              </div>

              <div className="info-card">
                <h4>Whatsapp</h4>
                <p>Message us directly <a href="https://wa.me/27681928157"><button>here</button></a> </p>
              </div>

               {/* <div className="info-card">
                <h4>Physical Address</h4>
                <p>
                  
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.508093715912!2d28.217030874260068!3d-25.918536577253718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9568b990322b33%3A0xeb64d85875a8326d!2s22%20Mintaka%20Street%2C%20Midstream%20Estate%2C%20Olifantsfontein%2C%201668!5e0!3m2!1sen!2sza!4v1770677353077!5m2!1sen!2sza"
                    width="250"
                    height="150"
                    style={{ border: 0, borderRadius: "7%",}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Lahlelo"
                  ></iframe>
                </p>
              </div> */}
              <Footer/>
          </main>
        </div>
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2
    </>
  );
}

export default ContactUs;
