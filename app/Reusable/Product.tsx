"use client";

import styles from "./Reusable.module.scss";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";

function Product({ img, name, popular, isView }: { img: string; name: string; popular: boolean; isView: boolean }) {
   return (
      <Link href={"#"} className={styles.item}>
         {popular ? (
            <div className={styles.item__popular}>
               <MdOutlineStarPurple500 size={25} />
               <span>Популярный товар</span>
            </div>
         ) : (
            ""
         )}
         <div className={`${styles.item__imgBody} ${isView ? styles.item__imgBodyLine : ""}`}>
            <Image src={img} alt={name} fill objectFit="contain" />
         </div>
         <div className={styles.item__title}>{isView ? "Инверторный кондиционер" + " " + name : name}</div>
      </Link>
   );
}
export default Product;
