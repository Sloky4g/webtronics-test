import React from "react";
import styles from "../../styles/ReviewItem.module.css";
import Image from "next/image";
import leftArrow from "../../public/img/review/left-arrow.png";
import rightArrow from "../../public/img/review/right-arrow.png";
import {ReviewSectionDataInterface} from "../../interfaces/interfaces";

interface ReviewItemProps {
  item: ReviewSectionDataInterface
  currentTab: number
  numberOfItems: number
  nextTab(): void
  prevTab(): void
}

export default function ReviewItem(props: ReviewItemProps) {
  return (
    <div className={"wrapper"}>
      <div key={props.item.id} className={styles.reviewTextContainer}>
        <h4 className={styles.reviewItemTitle}>{props.item.title}</h4>
        <p>{props.item.text}</p>
      </div>
      <div className={styles.reviewImgContainer}>
        <div className={styles.reviewItemControl}>
          <p className={styles.reviewItemControlText}>{props.currentTab + 1}/<sup>{props.numberOfItems}</sup></p>
          <div className={styles.reviewItemBtns}>
            <button onClick={props.prevTab} className={styles.reviewItemBtn}>
              <Image src={leftArrow} alt={"left-arrow"}/>
            </button>
            <button onClick={props.nextTab} className={styles.reviewItemBtn}>
              <Image src={rightArrow} alt={"right-arrow"}/>
            </button>
          </div>
        </div>
        <div className={styles.reviewItemImgContainer}>
          <div className={styles.reviewItemImg1}>
            <Image src={props.item.imgSrc1} alt={"review-img1"}/>
          </div>
          <div className={styles.reviewItemImg2}>
            <Image src={props.item.imgSrc2} alt={"review-img2"}/>
          </div>
          <div className={styles.reviewItemImg3}>
            <Image src={props.item.imgSrc3} alt={"review-img3"}/>
          </div>
        </div>
      </div>
    </div>
  )
}