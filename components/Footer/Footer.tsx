import React from "react";
import styles from "../../styles/Footer.module.css";
import Image from "next/image";
import logo from "../../public/img/header/logo.png";
import Link from "next/link";
import socialIcon1 from "../../public/img/footer/social1.svg";
import socialIcon2 from "../../public/img/footer/social2.svg";
import socialIcon3 from "../../public/img/footer/social3.svg";
import socialIcon4 from "../../public/img/footer/social4.svg";

export default function Footer() {
  return (
    <footer className={styles.footerOuterContainer}>
      <div className={styles.footerInnerContainer}>
        <div className={styles.footer}>
          <div className={`container ${styles.footerContainer}`}>
            <div className={styles.footerAddress}>
              <div className={styles.footerLogo}>
                <Link href={"#home"}>
                  <Image
                    src={logo}
                    alt={"logo"}
                  />
                </Link>
              </div>
              <p>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
            </div>
            <div className={styles.footerCompany}>
              <h6 className={styles.footerTitle}>Company</h6>
              <div className={styles.footerLinksContainer}>
                <div className={styles.footerLinks}>
                  <Link className={styles.footerLink} href={"#about"}>About Us</Link>
                  <Link className={styles.footerLink} href={"#steps"}>Steps</Link>
                  <Link className={styles.footerLink} href={"#faq"}>FAQs</Link>
                </div>
                <div className={styles.footerLinks}>
                  <Link className={styles.footerLink} href={"#review"}>Review</Link>
                  <Link className={styles.footerLink} href={"#gallery"}>Gallery</Link>
                </div>
              </div>
            </div>
            <div className={styles.footerSocial}>
              <h6 className={styles.footerTitle}>Social media</h6>
              <div className={styles.footerIcons}>
                <div className={styles.footerIcon1}>
                  <Link href={"/"}>
                    <Image src={socialIcon1} alt={"icon"}/>
                  </Link>
                </div>
                <div className={styles.footerIcon2}>
                  <Link href={"/"}>
                    <Image src={socialIcon2} alt={"icon"}/>
                  </Link>
                </div>
                <div className={styles.footerIcon3}>
                  <Link href={"/"}>
                    <Image src={socialIcon3} alt={"icon"}/>
                  </Link>
                </div>
                <div className={styles.footerIcon4}>
                  <Link href={"/"}>
                    <Image src={socialIcon4} alt={"icon"}/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}