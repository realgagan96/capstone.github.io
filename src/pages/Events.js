import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { coute } from "../config/Coute";
import Zoom from "react-reveal/Zoom";

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * coute.length);
  return coute[randomIndex];
}

export default function Events() {
  const [currentCard, setCurrentCard] = useState(getRandomCard());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCard = getRandomCard();
      setCurrentCard(newCard);
    }, 10000); // Change card every 5 seconds (adjust as needed)

    return () => clearInterval(intervalId);
  }, []);

  // Api

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rbmz5ct",
        "template_gg7ljka",
        form.current,
        "BcAU_zGUsTMEBLIMa"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            theme: "colored",
            position: "top-center",
          });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // Return Statement
  return (
    <>
      <div className="gurd_container">
        {/*----------------------------- Navigation Bar -----------------------------*/}
        <nav>
          {/* //row align-items-center text-center */}
          <div className=" navber">
            <div className="col-sm-2 images">
              <img
                src="/logo.png"
                alt="image1"
                height="80px"
                width="80px"
                className="animate__animated animate__flip animate__delay-2s 2s animate__repeat-3 3"
              />
            </div>

            <div className=" logo">
              <Zoom left cascade text>
                <h1 className="syr-name">Syracuse Gurdwara</h1>
              </Zoom>
            </div>
            <div className="col-sm-2 images">
              <img
                src="/logo.png"
                alt="image2"
                height="80px"
                width="80px"
                className="animate__animated animate__flip animate__delay-2s 2s animate__repeat-3 3"
              />
            </div>
          </div>
        </nav>

        <div className="container">
          {/*----------------------------- carousel Start -----------------------------*/}
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/banner (1).jpeg"
                  className="d-block w-100"
                  alt="Slider_Image"
                  style={{ height: "100%", objectFit: "fill" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/banner (2).jpeg"
                  className="d-block w-100"
                  alt="Slider_Image"
                  style={{ height: "100%", objectFit: "fill" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/banner (3).jpeg"
                  className="d-block w-100"
                  alt="Slider_Image"
                  style={{ height: "100%", objectFit: "fill" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/*----------------------------- carousel End -----------------------------*/}

          {/*----------------------------- Paragraph Start -----------------------------*/}

          <div className="description" data-aos="fade-down">
            <p>
              A gurdwara is a place of worship for Sikhs. The word gurdwara
              comes from the Punjabi word for "doorway to the Guru" or "the
              residence of the Guru". Gurdwaras are also known as Gurdwara
              Sahib.
            </p>
          </div>
          <div className="arrowdiv">
            <a href="#thisweek">
              <span className="material-symbols-outlined" id="arrowd">
                expand_more
              </span>
            </a>
          </div>
          <div className="thisweek" id="thisweek">
            <h1>This weekend events</h1>
          </div>
          {/*----------------------------- Paragraph End -----------------------------*/}

          {/*----------------------------- calender Start -----------------------------*/}

          <section className="calender" data-aos="fade-down">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=750&wkst=7&bgcolor=%2307315c&ctz=America%2FNew_York&mode=WEEK&showTabs=1&showPrint=0&showCalendars=0&showTitle=0&src=Z2FnYW54c2luZ2gwMDdAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cDcwNDk1Z2htb2FqM2xxMm9udXRxa3RnbzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Zmk4ZTRwNmo0NnVpZDRzdDc2OWc5bWttYTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%23F4511E&color=%233F51B5&color=%230B8043"
              style={{ border: "solid 1px #777" }}
              width={1300}
              height={750}
              frameBorder={0}
              scrolling="no"
              title="Google Calendar"
            />
          </section>

          {/*----------------------------- calender End -----------------------------*/}

          <div className="arrowdiv">
            <a href="#contact" className="down_button">
              <span className="material-symbols-outlined" id="arrowd">
                expand_more
              </span>
            </a>
          </div>
        </div>
        <h1 id="titlehistory">History &amp; Gurus</h1>

        <div className="qout_main container" data-aos="fade-down">
          {/*------------------History & Gurus Card Start -------------------*/}

          <div id="history" className="py-2">
            <div className="leftside">
              <h5 style={{ textAlign: "justify", marginRight: ".5rem" }}>
                "{currentCard.coute}"
              </h5>
            </div>
            <div className="rightside">
              <div
                className="card"
                style={{
                  overflow: "hidden",
                  width: "300px",
                  borderRadius: ".5rem",
                  boxShadow: ".2rem .2rem .3rem rgba(0,0,0,0.3)",
                }}
              >
                <img
                  src={currentCard.image}
                  alt="Avatar"
                  style={{ width: "100%", height: "15rem" }}
                />
                <div
                  className="container"
                  style={{
                    textAlign: "start",
                    width: "100%",
                    padding: ".7rem .5rem",
                  }}
                >
                  <h4>
                    <b>{currentCard.name}</b>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          {/*------------------History & Gurus Card End -------------------*/}
        </div>

        {/*------------------Contact Section Start -------------------*/}

        <section id="contact" className="row contact_section">
          <div className="contact_container row">
            {/*------------------Map Content Start -------------------*/}

            <div className="about ">
              <div className="maps " data-aos="fade-down">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d372836.9655959299!2d-76.4552014!3d43.1089533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9ee8e5d9a0277%3A0x1a1ab14d92a598a3!2sGurdwara%20Syracuse!5e0!3m2!1sen!2sus!4v1684857743403!5m2!1sen!2sus"
                  // width={400}
                  // height={300}
                  // style={{ borderRadius: 15 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="google-map"
                />
              </div>
              <div className="contact" data-aos="fade-down">
                <h1>Get in Touch</h1>
                <p>
                  To book an event, wedding, prayer or for sponsorship please
                  complete the “get in touch” form. Someone will reach out to
                  you ASAP.{" "}
                </p>
              </div>
            </div>

            {/*------------------Map Content End -------------------*/}

            {/* <Flip left cascade> */}
            {/* <div className="form_container"> */}
            <form
              className="form"
              ref={form}
              onSubmit={sendEmail}
              data-aos="fade-down"
            >
              {/* <div className="form"> */}
              <div className="row">
                <h1>Get in Touch</h1>
                <div className="col" id="colum1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="fname"
                    required
                  />
                </div>
                <div className="col" id="colum1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lname"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col" id="colum1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col" id="colum1">
                  <div className="input-group">
                    <span className="input-group-text">Type Here</span>
                    <textarea
                      className="form-control"
                      aria-label="With textarea"
                      name="message"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col" id="colum1">
                  <button className="btn btn-primary" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </form>
            {/* </div> */}
            {/* </Flip> */}
          </div>
        </section>
        {/*------------------Contact Section End -------------------*/}
      </div>
    </>
  );
}
