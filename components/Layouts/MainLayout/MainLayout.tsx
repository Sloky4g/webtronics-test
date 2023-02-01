import React from "react";
import styles from "../../../styles/MainLayout.module.css";
import Image from "next/image";
import mainBgImg from "../../../public/img/main-bg.jpg"
import {useAppSelector} from "../../../hooks/redux";

interface MainLayoutProps {
  children: any
}

export default function MainLayout(props: MainLayoutProps) {
  const loading = useAppSelector(state => state.appReducer.loading);
  const notification = useAppSelector(state => state.appReducer.notification);

  return (
    <div className={styles.bgContainer}>
      {loading ?
        <p className={styles.notificationBar}>Loading...</p> : null
      }
      {notification.status ?
        <p style={notification.type === "success" ? {color: "#4cfd46"} : {color: "#FD4646"}} className={styles.notificationBar}>{notification.message}</p> : null
      }
      <Image
        src={mainBgImg}
        alt={"main-background"}
        className={styles.bgImg}
      />
      <div className={"container"}>
        {props.children}
      </div>
    </div>
  )
}