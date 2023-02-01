import React from "react";
import styles from "../../styles/MainMenu.module.css";
import Image from "next/image";
import logo from "../../public/img/header/logo.png";
import Link from "next/link";

export default function MainMenu() {
  return (
    <div className={styles.mainMenu}>
      <div className={styles.logo}>
        <Link href={"#home"}>
          <Image
            src={logo}
            alt={"logo"}
          />
        </Link>
      </div>
      <nav className={styles.navbar}>
        <Link
          href={"#about"}
          className={styles.navLink}
        >
          About
        </Link>
        <Link
          href={"#programs"}
          className={styles.navLink}
        >
          Programs
        </Link>
        <Link
          href={"#steps"}
          className={styles.navLink}
        >
          Steps
        </Link>
        <Link
          href={"#faq"}
          className={styles.navLink}
        >
          Questions
        </Link>
        <Link
          href={"#contact"}
          className={styles.navLink}
        >
          Get in touch
        </Link>
      </nav>
    </div>
  )
}