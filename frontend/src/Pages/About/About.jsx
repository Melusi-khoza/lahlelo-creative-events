import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
<<<<<<< HEAD
=======
import aboutPic from "./DSC00021.jpg";
import aboutPic2 from "./DSC00009.jpg";
import "./About.css";
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2

export default function About() {
  return (
    <>
<<<<<<< HEAD
        <Header />
        <body>
            <h1>About Us</h1>
            <p>
                At Lahlelo Creative Events, we are passionate about turning your dreams into unforgettable realities. With years of experience in the event planning industry, we specialize in creating bespoke events that reflect your unique style and vision. Our dedicated team of professionals works closely with you to ensure every detail is meticulously planned and executed, from intimate gatherings to grand celebrations. We pride ourselves on our creativity, attention to detail, and commitment to excellence, making us the trusted choice for all your event planning needs. Let us bring your vision to life and create memories that will last a lifetime.
            </p>
        </body>
        <Footer />
    </>
  );
}
=======
      <Header />
      <div className="about-page-wrapper">
        <main className="about-content">
          <div className="about-text-section">
            <h1>
              About <span>Us</span>
            </h1>
            <p>
              At Lahlelo Creative Events, we are passionate about turning your
              dreams into unforgettable realities. With years of experience in
              the event planning industry, we specialize in creating bespoke
              events that reflect your unique style and vision.
            </p>
            <p>
              Our dedicated team of professionals works closely with you to
              ensure every detail is meticulously planned and executed, from
              intimate gatherings to grand celebrations. We pride ourselves on
              our creativity, attention to detail, and commitment to excellence,
              making us the trusted choice for all your event planning needs.
              Let us bring your vision to life and create memories that will
              last a lifetime.
            </p>
          </div>

          <div className="about-image-section">
            <div className="image-frame">
              <img src={aboutPic2} alt="About Lahlelo Creative Events" />
              <img src={aboutPic} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2
