import React from "react";
import styles from "../../styles/MentorItem.module.css";
import Image, {StaticImageData} from "next/image";

interface MentorItemProps {
  src: StaticImageData
  name: string
  children: string
  style?: object
}

export default function MentorItem(props: MentorItemProps) {
  return (
    <div style={props.style} className={styles.aboutMentorsItem}>
      <div className={styles.aboutMentorsItemImg}>
        <Image src={props.src} alt={"mentor-img"}/>
      </div>
      <h4 className={styles.aboutMentorsItemTitle}>
        {props.name}
      </h4>
      <p className={styles.aboutMentorsItemText}>{props.children}</p>
    </div>
  )
}