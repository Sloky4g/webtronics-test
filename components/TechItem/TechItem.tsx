import React from "react";
import styles from "../../styles/TechItem.module.css";
import Image, {StaticImageData} from "next/image";

interface TechItemProps {
  src: StaticImageData
  title: string
}

export default function TechItem(props: TechItemProps) {
  return (
    <div className={styles.techItemContainer}>
      <Image src={props.src} alt={"tech-img"}/>
      <p className={styles.techItemTitle}>{props.title}</p>
    </div>
  )
}