import React, { useCallback, useEffect, useRef } from "react";
import classes from "../../styles/componentStyles/aboutPageComponents/aboutepage.module.css";
import profilePhoto from "../../assets/photo.png";
import BlurText from "../common/blurText";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const AboutPageContainer: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { mode } = useSelector((state: RootState) => state.container);

  useEffect(() => {
    const element = cardRef.current;
    if (element) {
      element.addEventListener("pointermove", mouseMoveHandler);
      element.addEventListener("pointerleave", mouseOutHandler);
    }

    return () => {
      if (element) {
        element.removeEventListener("pointermove", mouseMoveHandler);
        element.removeEventListener("pointermove", mouseOutHandler);
      }
    };
  }, []);

  const mouseMoveHandler = useCallback((event: any) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const ydeg = ((150 - x) / 150) * 15;
      const xdeg = ((y - 225) / 225) * 15;
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(400px) rotateX(${xdeg}deg) rotateY(${ydeg}deg) translate3d(0, 0, 25px)`;
      }
    }
  }, []);

  const mouseOutHandler = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform = `perspective(400px) rotateX(0deg) rotateY(10deg) scale(1.00) translate3d(0, 0, 0)`;
    }
  }, []);

  return (
    <div className={classes.about_page_container}>
      <div className={`${classes.photo_card_container} ${classes[mode]}`}>
        <div ref={cardRef} className={`${classes.photo_card} ${classes[mode]}`}>
          <div className={classes.photo}>
            <img
              src={profilePhoto}
              className={classes.image}
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

export default React.memo(AboutPageContainer);
