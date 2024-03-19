"use client";

import styles from "./Reusable.module.scss";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";

type ElementType = {
   id: string;
   semiIndustrialGroup: {
      name: string;
      type: boolean;
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
         <div className={`${styles.item__imgBody} ${isView ? styles.item__imgBodyLine : ""}`}>
            <Image
               src={element.semiIndustrialGroup.image.node.sourceUrl}
               alt={element.semiIndustrialGroup.name}
               fill
               objectFit="contain"
            />
         </div>
         <div className={styles.item__title}>
            {isView
               ? "Инверторный кондиционер" + " " + element.semiIndustrialGroup.name
               : element.semiIndustrialGroup.name}
         </div>
      </Link>
   );
}
export default Product;
