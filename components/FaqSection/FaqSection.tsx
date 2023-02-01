import React from "react";
import styles from "../../styles/FaqSection.module.css";
import Image from "next/image";
import faqImg from "../../public/img/faq/faq-img.png";
import AccordionItem from "../AccordionItem/AccordionItem";

export default function FaqSection() {
  return (
    <section id={"faq"} className={styles.faqSection}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <div className={"wrapper " + styles.faqImg}>
        <Image src={faqImg} alt={"faq-img"}/>
        <div className={styles.faqImgContainer}>
          <p>
            Do you have any kind of questions?
            <br/>We are here to help.
          </p>
        </div>
        <div className={styles.faqAccordionContainer}>
          <AccordionItem
            title={"What is the price?"}
            text={"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."}
            defaultState={true}
          />
          <AccordionItem
            title={"What is the price?"}
            text={"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."}
            defaultState={false}
          />
          <AccordionItem
            title={"What is the price?"}
            text={"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."}
            defaultState={false}
          />
          <AccordionItem
            title={"What is the price?"}
            text={"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."}
            defaultState={false}
            style={{marginBottom: "0"}}
          />
        </div>
      </div>
    </section>
  )
}