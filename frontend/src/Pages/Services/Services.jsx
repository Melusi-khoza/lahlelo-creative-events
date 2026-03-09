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
        mainImage: "/Dwala 1st Birthday/LHP_4113.jpg",
        images: [
          "/Dwala 1st Birthday/LHP_4102.jpg",
          "/Dwala 1st Birthday/LHP_4207.jpg",
          "/Dwala 1st Birthday/LHP_4204.jpg",
          "/Dwala 1st Birthday/LHP_4043.jpg",
          "/Dwala 1st Birthday/LHP_4047.jpg",
          "/Dwala 1st Birthday/LHP_4090.jpg",
          "/Dwala 1st Birthday/LHP_4050.jpg",
          "/Dwala 1st Birthday/LHP_4059.jpg",
          "/Dwala 1st Birthday/LHP_4061.jpg",
          "/Dwala 1st Birthday/LHP_4063.jpg",
          "/Dwala 1st Birthday/LHP_4066.jpg",
          "/Dwala 1st Birthday/LHP_4065.jpg",
          "/Dwala 1st Birthday/LHP_4074.jpg",
          "/Dwala 1st Birthday/LHP_4110.jpg",
          "/Dwala 1st Birthday/LHP_4088.jpg",
          "/Dwala 1st Birthday/LHP_4113.jpg",
          "/Dwala 1st Birthday/LHP_4115.jpg",
          "/Dwala 1st Birthday/LHP_4116.jpg",
          "/Dwala 1st Birthday/LHP_4107.jpg",
          "/Dwala 1st Birthday/LHP_4078.jpg",
          "/Dwala 1st Birthday/LHP_4109.jpg",
          "/Dwala 1st Birthday/LHP_4122.jpg",
          "/Dwala 1st Birthday/LHP_4196.jpg",
          "/Dwala 1st Birthday/LHP_4415.jpg",
        ],
      },
      {
        // name: "Yassir's 21 Birthday",
        mainImage: "/Yassir 21st Birthday/LHP_6324.jpg",
        images: [
          "/Yassir 21st Birthday/LHP_6324.jpg",
          "/Yassir 21st Birthday/LHP_6328.jpg",
          "/Yassir 21st Birthday/LHP_6332.jpg",
          "/Yassir 21st Birthday/LHP_6336.jpg",
          "/Yassir 21st Birthday/LHP_6343.jpg",
          "/Yassir 21st Birthday/LHP_6344.jpg",
          "/Yassir 21st Birthday/LHP_6346.jpg",
          "/Yassir 21st Birthday/LHP_6350.jpg",
          "/Yassir 21st Birthday/LHP_6354.jpg",
          "/Yassir 21st Birthday/LHP_6363.jpg",
          "/Yassir 21st Birthday/LHP_6376.jpg",
          "/Yassir 21st Birthday/LHP_6383.jpg",
          "/Yassir 21st Birthday/LHP_6390.jpg",
          "/Yassir 21st Birthday/LHP_6446.jpg",
          "/Yassir 21st Birthday/LHP_6350.jpg",
          "/Yassir 21st Birthday/LHP_6404.jpg",
          "/Yassir 21st Birthday/LHP_6417.jpg",
          "/Yassir 21st Birthday/LHP_6418.jpg",
        ],
      },
    ],
    "Corporate Events": [
      {
        // name: "Metro FM Meadi Launch",
        mainImage: "/CorporateEventPics/ce1.jpeg",
        images: [
          "/CorporateEventPics/ce1.jpeg",
          "/CorporateEventPics/ce2.jpeg",
          "/CorporateEventPics/ce3.jpeg",
          "/CorporateEventPics/ce4.jpeg",
          "/CorporateEventPics/ce5.jpeg",
          "/CorporateEventPics/ce6.jpeg",
          "/CorporateEventPics/ce7.jpeg",
          "/CorporateEventPics/ce8.jpeg",
          "/CorporateEventPics/ce9.jpeg",
        ],
      },
    ],
    "Baby Shower": [
      {
        // name: "Sonto's Baby Shower",
        mainImage: "/BabyShowerPics/bs1.jpeg",
        images: [
          "/BabyShowerPics/bs1.jpeg",
          "/BabyShowerPics/bs2.jpeg",
          "/BabyShowerPics/bs3.jpeg",
          "/BabyShowerPics/bs4.jpeg",
          "/BabyShowerPics/bs5.jpeg",
        ],
      },
    ],
    "Thanksgiving Celebration": [
      {
        mainImage: "/CV Thanksgiving/DSC00075.jpg",
        images: [
          "/CV Thanksgiving/DSC00049.jpg",
          "/CV Thanksgiving/DSC00054.jpg",
          "/CV Thanksgiving/DSC00064.jpg",
          "/CV Thanksgiving/A7R00022.jpg",
          "/CV Thanksgiving/A7R00023.jpg",
          "/CV Thanksgiving/DSC00009.jpg",
          "/CV Thanksgiving/DSC00010.jpg",
          "/CV Thanksgiving/DSC00011.jpg",
          "/CV Thanksgiving/A7R00009.jpg",
          "/CV Thanksgiving/DSC00012.jpg",
          "/CV Thanksgiving/DSC00013.jpg",
          "/CV Thanksgiving/DSC00014.jpg",
          "/CV Thanksgiving/DSC00015.jpg",
          "/CV Thanksgiving/DSC00019.jpg",
          "/CV Thanksgiving/DSC00021.jpg",
          "/CV Thanksgiving/DSC00023.jpg",
          "/CV Thanksgiving/DSC00024.jpg",
          "/CV Thanksgiving/DSC00026.jpg",
          "/CV Thanksgiving/DSC00027.jpg",
          "/CV Thanksgiving/DSC00029.jpg",
          "/CV Thanksgiving/DSC00031.jpg",
          "/CV Thanksgiving/DSC00032.jpg",
          "/CV Thanksgiving/DSC00033.jpg",
          "/CV Thanksgiving/DSC00034.jpg",
          "/CV Thanksgiving/DSC00036.jpg",
          "/CV Thanksgiving/DSC00039.jpg",
          "/CV Thanksgiving/DSC00043.jpg",
          "/CV Thanksgiving/DSC00071.jpg",
          "/CV Thanksgiving/DSC00079.jpg",
          "/CV Thanksgiving/DSC00075.jpg",
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
