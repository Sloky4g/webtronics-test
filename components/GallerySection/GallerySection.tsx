import React from "react";
import styles from "../../styles/GallerySection.module.css";
import largeImg from "../../public/img/gallery/large-img.png";
import topSmallImg from "../../public/img/gallery/top-small-img.png";
import bottomSmallImg from "../../public/img/gallery/bottom-small-img.png";
import verticalImg from "../../public/img/gallery/vertical-img.png";
import Image from "next/image";

export default function GallerySection() {
  return (
    <section id={"gallery"} className={styles.gallerySection}>
      <h2 className={styles.galleryTitle}>Gallery</h2>
      <div className={"wrapper"}>
        <div className={styles.galleryTopText}>
          <p>By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects.</p>
        </div>
        <div className={`${styles.galleryVerticalImg} ${styles.galleryImgContainer}`}>
          <Image src={verticalImg} alt={"vertical-img"}/>
        </div>
        <div className={`${styles.galleryLargeImg} ${styles.galleryImgContainer}`}>
          <Image src={largeImg} alt={"large-img"}/>
        </div>
        <div className={`${styles.galleryTopSmallImg} ${styles.galleryImgContainer}`}>
          <Image src={topSmallImg} alt={"top-small-img"}/>
        </div>
        <div className={`${styles.galleryBottomSmallImg} ${styles.galleryImgContainer}`}>
          <Image src={bottomSmallImg} alt={"bottom-small-img"}/>
        </div>
        <div className={styles.galleryBottomText}>
          <p>If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.</p>
        </div>
      </div>
    </section>
  )
}