"use client";

import styles from "../../Reusable/Reusable.module.scss";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useAppSelector } from "@/app/Hooks/ReduxHooks";

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
};

function Product({ element }: Props) {
   const isView = useAppSelector((state) => state.ProductSlice.isLineView);
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
