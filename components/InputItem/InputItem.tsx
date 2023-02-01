import React from "react";
import styles from "../../styles/InputItem.module.css";
import {FieldError} from "react-hook-form";

interface InputItemProps {
  name: string
  placeholder: string
  register(name: string): object
  errors: FieldError | undefined
}

export default function InputItem(props: InputItemProps) {
  return (
    <>
      <div
        style={props.errors ? {background: "#FD4646"} : {}}
        className={styles.contactFormOuterInputContainer}
      >
        <input
          style={props.errors ? {backgroundColor: "#3D2E45"} : {}}
          className={styles.contactFormInput}
          {...props.register(props.name)}
          type="text"
          placeholder={props.placeholder}
        />
      </div>
      <p className={styles.contactFormError}>{props.errors?.message}</p>
    </>
  )
}