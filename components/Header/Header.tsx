import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import styles from "../../styles/Header.module.css";
import Button from "../Button/Button";

export default function Header() {
  return (
    <header id={"home"}>
      <MainMenu/>
      <div className={"wrapper"}>
        <h1 className={styles.headerTitle}>Front-End</h1>
        <p className={styles.headerText}>Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more).</p>
      </div>
      <div className={"wrapper"}>
        <div className={styles.btnContainer}>
          <Button title={"Start my career change"} href={"#contact"}/>
        </div>
        <h2 className={styles.headerSecondTitle}>Developer</h2>
      </div>
      <div className={"wrapper"}>
        <h3 className={styles.subTitle}>Courses</h3>
      </div>
    </header>
  )
}