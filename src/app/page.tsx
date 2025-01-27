"use client";
import styles from "./page.module.css";
import Typed from "typed.js";
import React from "react";
import { useEffect, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Zoom,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactModal from "react-modal";
import { Audio } from "react-loader-spinner";
import images from "../assets/images.json";
import articles from "../assets/articles.json";
import flags from "../flags";

// Import Swiper package styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/scrollbar";
import "swiper/css";

export default function Home() {
  const [initialLoad, setInitialLoad] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const delaySetIsOpen = (value) => {
    setModalIsOpen(true);
    setTimeout(() => setIsOpen(value), 2000);
  };

  const handleEscapeKey = (event) => {
    console.log(event);
    if (event.keyCode === 68) {
      setIsOpen(false);
      setModalIsOpen(false);
    }
  };

  useEffect(() => {
    if (!initialLoad) {
      // {
      var typed = new Typed("#typed", {
        strings: [
          "Engineer. Architect. Designer.",
          "Mentor. Student. Leader.",
          "Husband. Brother. Friend.",
        ],
        typeSpeed: 90,
      });

      setInitialLoad(true);
    }

    window.onhashchange = function () {
      console.log("derw");
      delaySetIsOpen(false);
    };

    // window.addEventListener('keydown', handleEscapeKey);

    // Remove the event listener when the component unmounts
    // return () => {
    //   window.removeEventListener('keydown', handleEscapeKey);
    // };

    // } else {
    //   setTimeout(() => setInitialLoad(false), 20000)
    // }
  }, [setInitialLoad, initialLoad]);

  return (
    <>
      <div
        className={styles.typedc}
        style={{
          margin: "auto",
          width: "100%",
          justifyContent: "center",
          display: "flex",
          marginTop: "3rem",
        }}
      >
        <span>
          <span id="typed" className={styles.typed}>
            &ensp;
          </span>
        </span>
      </div>
      <div className={styles.wrapper}>
        <div
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          <a
            target="0"
            href="https://linkedin.com/in/haeven"
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "#9E9E9E",
              cursor: "pointer",
            }}
          >
            LinkedIn
          </a>
          <br></br>
          <a
            target="0"
            href="https://github.com/haevenkelley"
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "#9E9E9E",
              cursor: "pointer",
            }}
          >
            View GitHub
          </a>
          <br></br>
          <a
            target="0"
            href="https://x.com/haevenkelley"
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "#9E9E9E",
              cursor: "pointer",
            }}
          >
            Follow on 𝕏
          </a>
          <br></br>
          <a
            target="0"
            href="/resume.pdf"
            style={{
              textDecoration: "none",
              textAlign: "center",
              color: "#9E9E9E",
              cursor: "pointer",
            }}
          >
            Download Resume
          </a>
          <br></br>
          <a
            target="0"
            href="https://github.com/haevenkelley/rares-ui-library/blob/main/src/lib/components/"
            style={{
              textAlign: "center",
              color: "#9E9E9E",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            View Frontend Code
          </a>
          <br></br>
          <a
            target="0"
            href="https://github.com/haevenkelley/advent-of-code/blob/main/2023/"
            style={{
              textAlign: "center",
              color: "#9E9E9E",
              cursor: "pointer",
              marginTop: "-25px",
              textDecoration: "underline",
            }}
          >
            View Other Code
          </a>
          <br></br>
          <p
            className={styles["hover-txt"]}
            onClick={() => delaySetIsOpen(!isOpen)}
            style={{
              cursor: "pointer",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {isOpen ? "Hide most recent work" : "View most recent work"}
          </p>
        </div>
      </div>
      {flags.enableBlog && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10vw",
            gap: "40px",
          }}
        >
          <h1 style={{ fontSize: "50px" }}>Blog</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingRight: "50px",
            }}
          >
            {articles.map((art) => {
              return (
                <div
                  style={{
                    cursor: "pointer",
                    height: "125px",
                    border: "1px solid white",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                  key={art.title}
                >
                  <p>{art.title} ...</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <ReactModal ariaHideApp={false} isOpen={modalIsOpen}>
        <>
          <span
            onClick={() => {
              setModalIsOpen(false);
              setIsOpen(false);
            }}
          >
            <img
              src="/close_icon.svg"
              className={styles["close-icon"]}
              width={"50px"}
              height={"50px"}
              style={{ transform: "" }}
            ></img>
          </span>

          {!isOpen && (
            <Audio
              height="80"
              width="80"
              color="black"
              ariaLabel="loading"
              wrapperStyle={{ justifyContent: "center", marginTop: "25vh" }}
            />
          )}

          {isOpen && (
            <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Zoom,
                Keyboard,
              ]}
              spaceBetween={50}
              style={{ position: "relative", overflow: "default" }}
              slidesPerView={1}
              keyboard={true}
              navigation
              zoom={true}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {images.map((i) => (
                <SwiperSlide
                  style={{ textAlign: "center" }}
                  zoom={true}
                  key={i.src}
                >
                  <img
                    style={{
                      maxHeight: "45rem",
                      width: "auto",
                      maxWidth: "80%",
                    }}
                    key={i.src}
                    src={i.src}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </>
      </ReactModal>
    </>
  );
}
