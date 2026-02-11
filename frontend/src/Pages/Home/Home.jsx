import "./Home.css";
// import hp1 from "./HomePic1.jpeg";
import hp2 from "./HomePic2.jpeg";
// import hp3 from "./HomePic3.jpeg";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

function Home() {
  return (
    <>
      <Header />
      <body>
        <div className="home-body">
          <img
            className="pic2"
            src={hp2}
            onClick={(e) => e.target.requestFullscreen()}
          ></img>
          {/* <img
            className="pic3"
            src={hp3}
            onClick={(e) => e.target.requestFullscreen()}
          ></img> */}
          <div className="overlay"></div>
          <div className="text-over-image">
            Hello world
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}

export default Home;
