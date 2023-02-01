import React from "react";
import styles from "../../styles/ContactSection.module.css";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import * as yup from "yup";
import Button from "../Button/Button";
import {yupResolver} from "@hookform/resolvers/yup";
import {feedbackInterface} from "../../interfaces/interfaces";
import {sendFeedback} from "../../requests/Request";
import {changeNotification, changeLoadingStatus} from "../../store/reducers/appSlice";
import {useAppDispatch} from "../../hooks/redux";
import InputItem from "../InputItem/InputItem";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid.').required("Please enter your phone number"),
  email: yup.string().email("Please enter a valid email address").required("Please enter your email address"),
})

export default function ContactSection() {
  const feedbackData = {
    id: null,
    name: "",
    phone: "",
    email: "",
  };

  const {register, handleSubmit, formState: {errors}, reset} = useForm<feedbackInterface>({
    resolver: yupResolver(validationSchema),
    defaultValues: feedbackData,
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(changeLoadingStatus(true));
    dispatch(changeNotification({status: false, type: null, message: ""}));

    let id = Date.now();

    sendFeedback({
      id: id,
      name: data.name,
      phone: data.phone,
      email: data.email,
    }).then(result => {
      if (result.type === "success") {
        reset();
        dispatch(changeNotification({status: true, type: "success", message: "Feedback added successfully"}))
      } else {
        console.log("Error", result.data);
        dispatch(changeNotification({status: true, type: "error", message: "Something goes wrong. Try again later"}));
      }
    }).finally(() => {
      dispatch(changeLoadingStatus(false));
    })
  }

  return (
    <section id={"contact"} className={styles.contactOuterContainer}>
      <div className={styles.contactInnerContainer}>
        <h2 className={styles.contactTitle}>Contact us</h2>
        <p className={styles.contactSubtitle}>Do you have any kind of help please contact with us.</p>
        <div className={styles.contactInputContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputItem name={"name"} placeholder={"Name"} register={register} errors={errors.name}/>
            <InputItem name={"phone"} placeholder={"Phone"} register={register} errors={errors.phone}/>
            <InputItem name={"email"} placeholder={"E-mail"} register={register} errors={errors.email}/>
            <Button
              title={"Send"}
              type={"submit"}
            />
          </form>
        </div>
      </div>
    </section>
  )
}