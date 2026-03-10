import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./Services.css";

// Main card images
import weddingPic from "../Services/weddingPics/front.jpg";
import pic1 from "../Services/weddingPics/Wedding.jpg";
import pic2 from "../Services/weddingPics/trw.jpg";
import pic3 from "../Services/weddingPics/w.jpg";
import pic4 from "../Services/weddingPics/tr.jpg";
import pic5 from "../Services/weddingPics/rowt.jpg";
import pic6 from"../Services/weddingPics/ro.jpg";
import pic7 from "../Services/weddingPics/r.jpg";
import pic8 from "../Services/weddingPics/hg.jpg";
import pic9 from "../Services/weddingPics/front.jpg";
import pic10 from "../Services/weddingPics/f.jpg";
import pic11 from "../Services/weddingPics/cr.jpg";

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- Services Data ---
  const servicesData = {
    "Wedding Events": [
      {
        // name: "Kurhula's Wedding",
        mainImage: weddingPic,
        images: [
          weddingPic, pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11,
        ],
      },
    ],
    "Birthday Party": [
      {
        // name: "Dwala's Birthday",
        mainImage: "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098217/LHP_4113_iqhrv5.jpg",
        images: [
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098222/LHP_4102_mlt6dv.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098304/LHP_4207_iiva8y.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098274/LHP_4204_i7mogr.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098060/LHP_4043_hchol8.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098059/LHP_4047_n6xplh.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098188/LHP_4090_qbquqf.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098065/LHP_4050_rn1gwf.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098061/LHP_4059_kqy54o.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098153/LHP_4061_dovri3.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098222/LHP_4063_i7dhy9.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098165/LHP_4066_yxqzlw.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098302/LHP_4065_bgtp41.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098151/LHP_4074_witzke.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098222/LHP_4110_ufdsnj.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098276/LHP_4088_wlk16o.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098217/LHP_4113_iqhrv5.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098295/LHP_4415_iss1uc.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098275/LHP_4116_vpyfr3.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098181/LHP_4107_hwlq2i.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098145/LHP_4078_u2p9es.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098202/LHP_4109_lhogpk.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098243/LHP_4122_ffga1x.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098283/LHP_4196_m2lidk.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098255/LHP_4115_mhb6f8.jpg",
        ],
      },
      {
        // name: "Yassir's 21 Birthday",
        mainImage: "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098288/LHP_6324_zxgb9a.jpg",
        images: [
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098288/LHP_6324_zxgb9a.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098295/LHP_6328_virkdy.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098296/LHP_6332_d8mo3a.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098297/LHP_6336_ksfmy4.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098301/LHP_6343_arfmhn.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098302/LHP_6344_vi2kec.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098304/LHP_6346_jcga9c.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098312/LHP_6350_bkpsoq.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098306/LHP_6354_h56dht.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098311/LHP_6363_ir6s7i.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098314/LHP_6376_rd7gd0.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098318/LHP_6383_chloum.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098322/LHP_6390_hzimgi.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098332/LHP_6446_ic8dfm.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098327/LHP_6404_lwn9gk.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098325/LHP_6408_avexvt.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098327/LHP_6417_mf9xtd.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098327/LHP_6418_uxyvpc.jpg",
        ],
      },
    ],
    "Corporate Events": [
      {
        // name: "Metro FM Meadi Launch",
        mainImage: "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097397/ce1_s4zemb.jpg",
        images: [
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097397/ce1_s4zemb.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097406/ce2_k9xh07.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097393/ce3_iqre94.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097399/ce4_amgqg0.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097413/ce5_mvxtcm.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097407/ce6_giakko.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097403/ce7_iacuro.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097407/ce8_pkmzn6.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097410/ce9_tdoe1w.jpg",
        ],
      },
    ],
    "Baby Shower": [
      {
        // name: "Sonto's Baby Shower",
        mainImage: "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097388/bs1_atyfu2.jpg",
        images: [
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097388/bs1_atyfu2.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097391/bs2_wtnrog.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097393/bs3_wv0cyx.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097391/bs4_fbhdkr.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097391/bs5_x9sg7d.jpg",
        ],
      },
   ],
    "Thanksgiving Celebration": [
      {
        mainImage: "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097959/DSC00075_fu1osw.jpg",
        images: [
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098042/DSC00049_zabxll.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098125/DSC00054_jjwbiw.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097941/DSC00064_xkqmsk.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097494/A7R00022_dnqdlt.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097468/A7R00023_siqxdu.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097493/DSC00009_g3clrl.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097523/DSC00011_pwhg5x.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097525/DSC00010_ljglni.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097491/A7R00009_citpka.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097510/DSC00012_td2yow.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097577/DSC00013_kbkfzm.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097568/DSC00014_roe7ah.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097597/DSC00015_ewf6cx.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097564/DSC00019_hqutse.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097576/DSC00021_prqsio.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097620/DSC00023_l9ryw4.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097675/DSC00024_ofsl1q.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097640/DSC00026_blppyt.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097693/DSC00027_mmheyw.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097704/DSC00029_kwryy1.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097700/DSC00031_akausg.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097715/DSC00032_subsg9.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097800/DSC00033_ic3efs.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097775/DSC00034_lrj5r9.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097789/DSC00036_esrmjr.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097796/DSC00039_qaiaew.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773098293/DSC00043_o4ryos.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097468/A7R00023_siqxdu.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097963/DSC00079_fs1mew.jpg",
          "https://res.cloudinary.com/dzzkfvl3y/image/upload/v1773097959/DSC00075_fu1osw.jpg",
        ],
      },    
    ],
  };

  // --- Helper: Get images for selected event ---
  const getEventImages = () => {
    if (!selectedEvent) return [];
    const { serviceKey, eventIndex } = selectedEvent;
    return servicesData[serviceKey][eventIndex].images;
  };

  // --- Modal navigation ---
  const showNextImage = (e) => {
    e.stopPropagation();
    const images = getEventImages();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    const images = getEventImages();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <Header />
      <div className="services-page">
        <main className="services-content">
          <div className="services-header">
            <h1>
              Our <span>Services</span>
            </h1>
            <p>
              We offer a comprehensive range of event planning and creative
              services tailored to your unique vision and needs.
            </p>
          </div>

          <div className="services-grid">
            {Object.keys(servicesData).map((serviceKey) => (
              <div className="service-card" key={serviceKey}>
                <div
                  className="service-img-container"
                  onClick={() =>
                    setActiveService(
                      activeService === serviceKey ? null : serviceKey
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={servicesData[serviceKey][0].mainImage}
                    alt={serviceKey}
                  />
                  <div className="service-overlay">
                    <h3>
                      {serviceKey.charAt(0).toUpperCase() + serviceKey.slice(1)}
                    </h3>
                  </div>
                </div>

                {activeService === serviceKey && (
                  <div className="event-list">
                    {servicesData[serviceKey].map((event, index) => (
                      <div
                        key={index}
                        className="event-item"
                        onClick={() => {
                          setSelectedEvent({ serviceKey, eventIndex: index });
                          setCurrentImageIndex(0);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {/* Thumbnail */}
                        <img
                          src={event.images[0]} // first image as preview
                          alt={event.name}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            marginBottom: "5px",
                          }}
                        />
                        {/* Owner/Event name */}
                        <div
                          style={{
                            textAlign: "center",
                            color: "#fff",
                            fontSize: "0.9rem",
                          }}
                        >
                          {event.name}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Event modal */}
          {selectedEvent && (
            <div className="image-modal" onClick={() => setSelectedEvent(null)}>
              <span
                className="close-btn"
                onClick={() => setSelectedEvent(null)}
              >
                &times;
              </span>

              <span className="prev-btn" onClick={showPrevImage}>
                ❮
              </span>

              <img
                className="modal-content"
                src={getEventImages()[currentImageIndex]}
                alt="Full View"
                onClick={(e) => e.stopPropagation()}
              />

              <span className="next-btn" onClick={showNextImage}>
                ❯
              </span>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
