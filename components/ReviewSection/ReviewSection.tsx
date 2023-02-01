import React, {useState} from "react";
import styles from "../../styles/ReviewSection.module.css";
import reviewImg1 from "../../public/img/review/review-1.png";
import reviewImg2 from "../../public/img/review/review-2.png";
import reviewImg3 from "../../public/img/review/review-3.png";
import reviewImgSmall1 from "../../public/img/review/review-small-1.png";
import reviewImgSmall2 from "../../public/img/review/review-small-2.png";
import reviewImgSmall3 from "../../public/img/review/review-small-3.png";
import {ReviewSectionDataInterface} from "../../interfaces/interfaces";
import ReviewItem from "../ReviewItem/ReviewItem";

const reviewSectionData: ReviewSectionDataInterface[] = [
  {
    id: 1,
    title: "Best courses ever",
    text: "Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the \"teacher\" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.",
    imgSrc1: reviewImg1,
    imgSrc2: reviewImgSmall2,
    imgSrc3: reviewImgSmall3,
  },
  {
    id: 2,
    title: "Amazing teaching",
    text: "The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.",
    imgSrc1: reviewImg2,
    imgSrc2: reviewImgSmall3,
    imgSrc3: reviewImgSmall1,
  },
  {
    id: 3,
    title: "Simple and easy",
    text: "I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.",
    imgSrc1: reviewImg3,
    imgSrc2: reviewImgSmall1,
    imgSrc3: reviewImgSmall2,
  },
]

export default function ReviewSection() {
  const [currentTab, setCurrentTab] = useState(0);

  const nextTab = () => {
    if (currentTab + 1 > reviewSectionData.length - 1) {
      setCurrentTab(0);
    } else {
      setCurrentTab(currentTab + 1);
    }
  }

  const prevTab = () => {
    if (currentTab - 1 < 0) {
      setCurrentTab(reviewSectionData.length - 1);
    } else {
      setCurrentTab(currentTab - 1);
    }
  }

  return (
    <section id={"review"} className={styles.reviewSection}>
      <h2 className={styles.reviewTitle}>Review</h2>
      {reviewSectionData.map((item, index) => {
        if (index === currentTab) {
          return (
            <ReviewItem
              item={item}
              currentTab={currentTab}
              numberOfItems={reviewSectionData.length}
              nextTab={nextTab}
              prevTab={prevTab}
              key={item.id}
            />
          )
        }
      })}
    </section>
  )
}