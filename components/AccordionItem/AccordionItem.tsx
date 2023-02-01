import React, {useState} from "react";
import styles from "../../styles/AccordionItem.module.css";
import Image from "next/image";
import plusIcon from "../../public/img/faq/plus-icon.svg";
import minusIcon from "../../public/img/faq/minus-icon.svg";

interface AccordionItemProps {
  title: string
  text: string
  defaultState: boolean
  style?: object
}

export default function AccordionItem(props: AccordionItemProps) {
  const [open, setOpen] = useState(props.defaultState);

  const accordionHandler = () => {
    console.log('test')
    setOpen(!open);
  }

  return (
    <div
      className={styles.accordionOutsideContainer}
      style={props.style}
    >
      <div
        className={styles.accordionInsideContainer}
        style={open ? {padding: "27px 24px"} : undefined}
      >
        <span
          className={styles.accordionBtn}
          onClick={accordionHandler}
          style={open ? {top: "29px"} : undefined}
        >
          {open ?
            <Image src={minusIcon} alt={"minus-img"}/> :
            <Image src={plusIcon} alt={"plus-img"}/>
          }
        </span>
        <h4
          className={styles.accordionTitle}
          style={open ? {marginBottom: "16px"} : undefined}
          onClick={accordionHandler}
        >
          {props.title}
        </h4>
        {open ?
          <p className={styles.accordionText}>
            {props.text}
          </p> : null
        }
      </div>
    </div>
  )
}