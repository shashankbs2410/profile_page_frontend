import React, { useEffect, useRef, useState } from "react";
import classes from "../../styles/componentStyles/aboutPageComponents/aboutepage.module.css";
import profilePhoto from "../../assets/photo.png";
import BlurText from "../common/blurText";

const AboutPageContainer: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    const element = cardRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const mouseMoveHandler = () => {
    console.log(mousePosition);
    const ydeg = ((150 - mousePosition.x) / 150) * 15;
    const xdeg = ((mousePosition.y - 225) / 225) * 15;
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(400px) rotateX(${xdeg}deg) rotateY(${ydeg}deg) translate3d(0, 0, 25px)`;
    }
  };

  const mouseOutHandler = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1.00)`;
    }
  };

  return (
    <div className={classes.about_page_container}>
      <div className={classes.photo_card_container}>
        <div
          ref={cardRef}
          className={classes.photo_card}
          onMouseMove={mouseMoveHandler}
          onMouseOut={mouseOutHandler}
        >
          <div className={classes.photo}>
            <img
              src={profilePhoto}
              style={{ width: "290px", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
      <div className={classes.about_me}>
        <BlurText
          text="Hello world! I am Shashank"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => {}}
          className={classes.about_me_heading}
        />
        <div className={classes.about_me_text}>
          Full-stack developer with 3+ years of experience building scalable web
          applications using React and Spring Boot. With proven track record of
          leading engineering teams, optimizing performance, and delivering
          enterprise-grade solutions.
        </div>
      </div>
    </div>
  );
};

export default AboutPageContainer;
