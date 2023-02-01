import React from "react";
import styles from "../../styles/TechSection.module.css";
import angularTechImg from "../../public/img/tech/angular-tech.png";
import reactTechImg from "../../public/img/tech/react-tech.png";
import vueTechImg from "../../public/img/tech/vue-tech.png";
import javascriptTechImg from "../../public/img/tech/javascript-tech.png";
import TechItem from "../TechItem/TechItem";

export default function TechSection() {
  return (
    <section id={"programs"}>
      <h2 className={styles.techTitle}>
        Programming technologies
      </h2>
      <p className={styles.techSubtitle}>
        By the end, you’ll have the portfolio and interview skills you need to start your new career.
      </p>
      <div className={styles.techContent}>
        <TechItem src={angularTechImg} title={"Angular"}/>
        <TechItem src={reactTechImg} title={"React"}/>
        <TechItem src={vueTechImg} title={"Vue.js"}/>
        <TechItem src={javascriptTechImg} title={"Javascript"}/>
      </div>
    </section>
  )
}