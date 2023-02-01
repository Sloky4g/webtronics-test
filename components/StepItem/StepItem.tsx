import React from "react";
import styles from "../../styles/StepItem.module.css";
import Image from "next/image";
import arrowLeftImg from "../../public/img/step/arrow-left.svg";
import arrowRightImg from "../../public/img/step/arrow-right.svg";

interface StepItemProps {
  title: string
  subtitle: string
  children: string
  borderSide: "right" | "left"
  style?: object
}

export default function StepItem(props: StepItemProps) {
  return (
    <div
      style={props.style}
      className={props.borderSide === "right" ? styles.leftSide : styles.rightSide}
    >
      <div className={styles.stepItemContent}>
        <div style={{order: props.borderSide === "right" ? 2 : 1}} className={styles.arrowImg}>
          <Image src={props.borderSide === "right" ? arrowLeftImg : arrowRightImg} alt={"arrow"}/>
        </div>
        <div
          style={{order: props.borderSide === "right" ? 1 : 2}}
          className={props.borderSide === "right" ? styles.rightSideBorder : styles.leftSideBorder}
        >
          <div className={styles.innerContainer}>
            <div className={styles.outerContent}>
              <div className={styles.innerContent}>
                <h4 className={styles.stepItemSubtitle}>
                  {props.subtitle}
                </h4>
                <h3 className={styles.stepItemTitle}>
                  {props.title}
                </h3>
                <p className={styles.stepItemText}>{props.children}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}