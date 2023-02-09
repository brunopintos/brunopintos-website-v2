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
          Hey! I live in{" "}
          <a
            href="https://goo.gl/maps/atxUPxPFbGdjpzmK6"
            target="_blank"
            rel="noreferrer"
          >
            Montevideo, Uruguay
          </a>
          , and work at{" "}
          <a
            href="https://effectussoftware.com/"
            target="_blank"
            rel="noreferrer"
          >
            Effectus Software
          </a>{" "}
          — a mobile & web applications development agency.
        </p>
        <p className="about-paragraph" style={Typography.styles.modalParagraph}>
          I'm a Senior Frontend Developer specialized in React and React Native
          projects. I like to participate in challenging projects and create
          solutions that change the world.
        </p>
        <p className="about-paragraph" style={Typography.styles.modalParagraph}>
          I am used to working with small and large teams, and I am passionate
          about sharing my knowledge with others. I was in charge of various
          development teams and trained several junior developers.
        </p>
        <p className="about-paragraph" style={Typography.styles.modalParagraph}>
          In my free time I like to play sports. ⚽️🏀🎾
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
