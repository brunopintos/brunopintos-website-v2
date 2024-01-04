import React from "react";

import Header from "components/Header";

import "./styles.css";
import {
  Bruno,
  BrunoDoron,
  BrunoOffice,
  BrunoVice,
  SocialEmail,
  SocialGithub,
  SocialLinkedIn,
} from "assets";
import { Typography } from "theme";

const About = () => (
  <div className="about-main-container">
    <Header selected="" />
    <h1 className="about-title">ABOUT ME</h1>
    <div className="about-container">
      <div className="about-images-container">
        <img src={BrunoVice} alt="profile" />
        <img src={BrunoDoron} alt="profile" />
        <img src={BrunoOffice} alt="profile" />
        <img src={Bruno} alt="profile" />
      </div>
      <div className="about-text-container">
        <h1
          className="about-paragraph-title"
          style={Typography.styles.modalParagraph}
        >
          Bruno Pintos.
        </h1>
        <p className="about-paragraph" style={Typography.styles.modalParagraph}>
          Hey! I am a Senior Frontend Developer based in{" "}
          <a
            href="https://goo.gl/maps/atxUPxPFbGdjpzmK6"
            target="_blank"
            rel="noreferrer"
          >
            Montevideo, Uruguay
          </a>
          .
        </p>
        <p className="about-paragraph" style={Typography.styles.modalParagraph}>
          I specialize in React Native and React.js development and have worked
          on a variety of projects, ranging from small-scale applications to
          large-scale enterprise solutions.
        </p>
        <p className="about-paragraph" style={Typography.styles.modalParagraph}>
          My experience includes managing development teams, training junior
          developers, and collaborating with cross-functional teams to deliver
          high-quality software solutions. In addition to my work experience, I
          hold a Bachelor's degree in Computer Science at Universidad ORT
          Uruguay.
        </p>
        <p className="about-paragraph" style={Typography.styles.modalParagraph}>
          In my free time, I enjoy playing sports, including soccer, basketball,
          and tennis. I am always looking for new challenges and opportunities
          to learn and grow. In 2024 I will start an MBA at University of CEMA,
          Buenos Aires, Argentina.
        </p>
        <div className="about-social">
          <a
            href="mailto:brunopintos98@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={SocialEmail} alt="email" />
          </a>
          <a
            href="https://www.linkedin.com/in/brunopintos98/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={SocialLinkedIn} alt="linkedin" />
          </a>
          <a
            href="https://github.com/brunopintos"
            target="_blank"
            rel="noreferrer"
          >
            <img src={SocialGithub} alt="github" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default About;
