"use client";

import { useAppSelector } from "@/app/Hooks/ReduxHooks";
import styles from "../../../Reusable/Reusable.module.scss";
import Link from "next/link";
import { DataInner } from "./page";
import Image from "next/image";

function Product({ element }: { element: DataInner }) {
   const isView = useAppSelector((state) => state.ProductSlice.isLineView);
   return (
      <Link href={"#"} className={styles.item}>
         <div className={`${styles.item__imgBody} ${isView ? styles.item__imgBodyLine : ""}`}>
            <Image
               src={element.vrfMiniGroup.image.node.sourceUrl}
               alt={element.vrfMiniGroup.name}
               fill
               objectFit="contain"
            />
         </div>
         <div className={styles.item__title}>
            {isView ? "Инверторный кондиционер" + " " + element.vrfMiniGroup.name : element.vrfMiniGroup.name}
         </div>
      </Link>
   );
}
export default Product;
