"use client";
import styles from "./Main.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import image1 from "../../public/img/v8.webp";
import image2 from "../../public/img/v8_2.webp";
import image3 from "../../public/img/v8_3.webp";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MdNavigateNext } from "react-icons/md";
import Image from "next/image";
import "./Swiper.css";

const sliderData = [image1, image2, image3];

function MostPopular() {
   return (
      <div className={styles.popular}>
         <Swiper
            className={styles.popular__swiper}
            autoplay={{
               delay: 3000,
               pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={700}
            slidesPerView={1}
            navigation={{
               nextEl: ".popular-button-next",
               prevEl: ".popular-button-prev",
            }}
            modules={[Navigation, Pagination, Autoplay]}
            grabCursor
            pagination={{
               clickable: true,
            }}
         >
            <button className="popular-button-next">
               <MdNavigateNext />
            </button>
            <button className="popular-button-prev">
               <MdNavigateNext />
            </button>
            {sliderData.map((el, index) => {
               return (
                  <SwiperSlide key={index}>
                     <div className={styles.popular__imgBody}>
                        <Image src={el} alt="оборудование" fill style={{ objectFit: "cover" }} />
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
}
export default MostPopular;
