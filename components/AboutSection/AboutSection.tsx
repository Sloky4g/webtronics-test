import React from "react";
import styles from "../../styles/About.module.css";
import Image from "next/image";
import mentorBg from "../../public/img/about/mentors-bg.png";
import mentor1 from "../../public/img/about/mentor1.png";
import mentor2 from "../../public/img/about/mentor2.png";
import mentor3 from "../../public/img/about/mentor3.png";
import aboutBgImg from "../../public/img/about/about-bg-img.svg";
import MentorItem from "../MentorItem/MentorItem";

export default function AboutSection() {
  return (
    <section id={"about"}>
      <h2 className={styles.aboutTitle}>About Us</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutMentorsContainer}>
          <h3 className={styles.aboutMentorsTitle}>Mentors</h3>
          <div className={styles.aboutMentorsContent}>
            <Image
              className={styles.aboutMentorsBg}
              src={mentorBg}
              alt={"mentor-bg"}
            />
            <MentorItem src={mentor1} name={"Wade Warren"}>
              Front-end engineers work closely with designers
            </MentorItem>
            <MentorItem src={mentor2} name={"Kristin Watson"} style={{paddingTop: 0}}>
              Front-end engineers work closely with designers
            </MentorItem>
            <MentorItem src={mentor3} name={"Robert Fox"}>
              Front-end engineers work closely with designers
            </MentorItem>
          </div>
        </div>
        <div className={styles.aboutText}>
          <p>Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too.</p>
        </div>
        <div className={styles.aboutBgImage}>
          <Image src={aboutBgImg} alt={"about-bg-img"}/>
        </div>
      </div>
    </section>
  )
}