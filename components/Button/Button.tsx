import React from "react";
import styles from "../../styles/Button.module.css";

interface ButtonProps {
  title: string
  onClick?(): void
  href?: string
  type?: "button" | "submit" | "reset" | undefined
}

export default function Button(props: ButtonProps) {
  return (
    <>
      {props.href ?
        <a
          href={props.href}
          className={styles.btn}
        >
          {props.title}
        </a> :
        <button
          className={styles.btn}
          onClick={props.onClick}
          type={props.type}
        >
          {props.title}
        </button>
      }
    </>
  )
}