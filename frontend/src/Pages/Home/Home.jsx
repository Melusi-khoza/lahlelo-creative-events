import "./Home.css";
import hp4 from "./Kholo2-40.jpg";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import video from "./nhlanhla-video.mp4";

function Home() {
  return (
    <>
      {/* <div className="layout-wrapper"> */}
      <Header />
      
      <div
  className="home-container"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    padding: "40px",
    flexWrap: "wrap",
    background: "linear-gradient(to top, black 30%, #ff6ec7 70%)",
    // backgroundColor: "#ff6ec7"
  }}
  >
    
  {/* LEFT SIDE - IMAGE */}
  <div
    style={{
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}
  >
    <video
      width="100%"
      autoPlay
      loop
      muted
      controls
      style={{height: "500px", objectFit: "cover"}}
    >
      <source src={video} type="video/mp4"/>
    </video>
    {/* <img
      className="pic2"
      src={"./HomePics/DSC00017.jpg"}
      alt="Event Background"
      style={{ width: "100%", maxWidth: "500px", height: "auto" }}
    /> */}
    {/* <img
      src={"./HomePics/DSC00075.jpg"}
      alt="Event Background"
      style={{ width: "100%", height: "auto" }}
    /> */}
    <p style={{padding: "5%"}}>
      
    Our team specializes in creating beautifully styled spaces that reflect your unique taste and vision. From stunning floral arrangements and elegant table settings to breathtaking backdrops and venue transformations, we pay attention to every detail to ensure your event is truly memorable. Whether it’s a wedding, birthday celebration, corporate event, or special occasion, we are dedicated to delivering exceptional décor that leaves a lasting impression on you and your guests.
    </p>
  </div>

  {/* RIGHT SIDE - TEXT */}
  <div
    style={{
      flex: "1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}
  >
    {/* <h1 className="home-title">
      Creating <span>Unforgettable</span> Events
    </h1> */}

    <p id="home-content" style={{ lineHeight: "1.6" }}>
      From intimate gatherings to grand celebrations, we bring your vision to
      life with elegance, precision and passion. Let us transform your dreams
      into reality and create unforgettable moments that will be cherished
      forever.
    </p>

    <img
      src={hp4}
      alt="Decor"
      style={{ width: "100%", maxWidth: "600px", height: "auto", marginTop: "20px" }}
    />
    <img
      src="https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098293/DSC00043_o4ryos.jpg"
      style={{ width: "100%", maxWidth: "600px", height: "auto", marginTop: "20px" }}
    />
  </div>
  <Footer />
</div>
      {/* <main className="home-body">
          
          <div className="overlay"></div>
          <div className="text-over-image">
            <h1>Creating <span>Unforgettable</span> Events</h1>
            <p id="home-content">
              From intimate gatherings to grand celebrations, we bring your vison to life with elegance , precision and passion. Let us transform your dreams into reality and create unforgettable moments that will be cherished forever.
            </p>
          </div>
        </main> */}
      
      {/* </div> */}
    </>
  );
}

export default Home;
