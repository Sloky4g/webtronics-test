import React from "react";
import styles from "../../styles/StepSection.module.css";
import StepItem from "../StepItem/StepItem";

export default function StepSection() {
  return (
    <section id={"steps"}>
      <h2 className={styles.stepTitle}>
        Steps
      </h2>
      <div className={"wrapper " + styles.stepContainer}>
        <StepItem
          title={"Introduction to Front-End"}
          subtitle={"Step 1"}
          borderSide={"right"}
        >
          Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.
        </StepItem>
        <StepItem
          style={{position: "relative", top: 124}}
          title={"Overview of Development"}
          subtitle={"Step 2"}
          borderSide={"left"}
        >
          Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.
        </StepItem>
        <StepItem
          title={"Introduction to Front-End"}
          subtitle={"Step 3"}
          borderSide={"right"}
        >
          Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.
        </StepItem>
        <StepItem
          style={{position: "relative", top: 124}}
          title={"Overview of Development"}
          subtitle={"Step 4"}
          borderSide={"left"}
        >
          Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.
        </StepItem>
        <StepItem
          title={"Introduction to Front-End"}
          subtitle={"Step 5"}
          borderSide={"right"}
        >
          Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.
        </StepItem>
        <StepItem
          style={{position: "relative", top: 124}}
          title={"Overview of Development"}
          subtitle={"Step 6"}
          borderSide={"left"}
        >
          Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis.
        </StepItem>
      </div>
    </section>
  )
}