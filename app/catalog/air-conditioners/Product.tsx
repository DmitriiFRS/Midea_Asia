"use client";

import styles from "../../Reusable/Reusable.module.scss";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";

type ElementType = {
   id: string;
   airCondGroup: {
      name: string;
      popular: boolean;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

type Props = {
   element: ElementType;
   isView: boolean;
};

function Product({ element, isView }: Props) {
   return (
      <Link href={"#"} className={styles.item}>
         {element.airCondGroup.popular ? (
            <div className={styles.item__popular}>
               <MdOutlineStarPurple500 size={25} />
               <span>Популярный товар</span>
            </div>
         ) : (
            ""
         )}
         <div className={`${styles.item__imgBody} ${isView ? styles.item__imgBodyLine : ""}`}>
            <Image
               src={element.airCondGroup.image.node.sourceUrl}
               alt={element.airCondGroup.name}
               fill
               objectFit="contain"
            />
         </div>
         <div className={styles.item__title}>
            {isView ? "Инверторный кондиционер" + " " + element.airCondGroup.name : element.airCondGroup.name}
         </div>
      </Link>
   );
}
export default Product;
