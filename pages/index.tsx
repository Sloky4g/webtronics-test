import Head from "next/head";
import { Provider } from "react-redux";
import { setupStore } from "../store/store";
import MainLayout from "../components/Layouts/MainLayout/MainLayout";
import Header from "../components/Header/Header";
import React from "react";
import AboutSection from "../components/AboutSection/AboutSection";
import TechSection from "../components/TechSection/TechSection";
import StepSection from "../components/StepSection/StepSection";
import FaqSection from "../components/FaqSection/FaqSection";
import ReviewSection from "../components/ReviewSection/ReviewSection";
import GallerySection from "../components/GallerySection/GallerySection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const store = setupStore();

  return (
    <>
      <Head>
        <title>Webtronics interview task</title>
        <meta name="description" content="Webtronics, testing frontend, interview" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#000000"/>
      </Head>
      <Provider store={store}>
        <MainLayout>
          <Header/>
          <AboutSection/>
          <TechSection/>
          <StepSection/>
          <FaqSection/>
          <ReviewSection/>
          <GallerySection/>
          <ContactSection/>
        </MainLayout>
        <Footer/>
      </Provider>
    </>
  )
}
