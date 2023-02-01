import {StaticImageData} from "next/image";
import {ReactElement} from "react";

export interface appStateInterface {
  loading: boolean,
  notification: notificationInterface
}

export interface feedbackInterface {
  id: number | null,
  email: string,
  name: string,
  phone: string,
}

export interface notificationInterface {
  status: boolean,
  type: "error" | "success" | null,
  message: string,
}

export interface ReviewSectionDataInterface {
  id: number,
  title: string,
  text: string,
  imgSrc1: StaticImageData,
  imgSrc2: StaticImageData,
  imgSrc3: StaticImageData,
}

export interface ErrorsInterface {
  email: ErrorInterface,
  phone: ErrorInterface,
  name: ErrorInterface,
}

export interface ErrorInterface {
  message: string,
  type: string,
  ref: ReactElement,
}