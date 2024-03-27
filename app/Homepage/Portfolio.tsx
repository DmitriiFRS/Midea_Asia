"use client";

import styles from "./Main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SlideContent from "./SlideContent";
import { Navigation } from "swiper/modules";
import "./Swiper.css";
import { MdNavigateNext } from "react-icons/md";
import slideImg1 from "../../public/img/slide1.jpg";
import slideImg2 from "../../public/img/slide2.jpg";
import slideImg3 from "../../public/img/slide3.jpg";

const sliderData = [
   {
      img: slideImg2,
      title: "2014 FIFA World Cup Brazil Beira Rio Stadium",
      subtitle: "It was the first time for Midea to enter the World Cup.",
   },
   {
      img: slideImg1,
      title: "2016 Rio Olympic Games Stadiums",
      subtitle: "Midea provided HVAC for all the new-constructed stadiums",
   },
   {
      img: slideImg3,
      title: "2014 FIFA World Cup Brazil Beira Rio Stadium",
      subtitle: "It was the first time for Midea to enter the World Cup.",
   },
   {
      img: slideImg2,
      title: "2014 FIFA World Cup Brazil Beira Rio Stadium",
      subtitle: "It was the first time for Midea to enter the World Cup.",
   },
];

function Portfolio() {
   return (
      <section className={`${styles.portfolio} swip`}>
         <div className={styles.portfolio__bg}></div>
         <div className="container">
            <h2 className={styles.portfolio__title}>Портфолио работ</h2>
            <Swiper
               className={styles.portfolio__swiper}
               spaceBetween={50}
               slidesPerView={3}
               navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
               }}
               modules={[Navigation]}
               grabCursor
            >
               <button className="swiper-button-next">
                  <MdNavigateNext />
               </button>
               <button className="swiper-button-prev">
                  <MdNavigateNext />
               </button>
               {sliderData.map((el, index) => {
                  return (
                     <SwiperSlide key={index}>
                        <SlideContent img={el.img} title={el.title} subtitle={el.subtitle} />
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </section>
   );
}
export default Portfolio;
