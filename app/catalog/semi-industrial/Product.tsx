"use client";

import styles from "../../Reusable/Reusable.module.scss";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useAppSelector } from "@/app/Hooks/ReduxHooks";

type ElementType = {
   id: string;
   semiIndustrialGroup: {
      name: string;
      type: string[];
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

type Props = {
   element: ElementType;
};

function Product({ element }: Props) {
   const isView = useAppSelector((state) => state.ProductSlice.isLineView);
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
