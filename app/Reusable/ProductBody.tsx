"use client";

import { useEffect } from "react";
import { useAppSelector } from "../Hooks/ReduxHooks";
import { DataProps } from "./EquipList";
import Product from "./Product";
import styles from "./Reusable.module.scss";

function ProductBody({ data }: { data: DataProps }) {
   const isView = useAppSelector((state) => state.ProductSlice.isLineView);
   useEffect(() => {
      console.log(isView);
   }, [isView]);
   return (
      <div className={`${styles.equip__body} ${isView ? styles.equip__bodyLine : ""}`}>
         {data.map((el) => {
            return (
               <Product
                  key={el.id}
                  img={el.airCondGroup.image.node.sourceUrl}
                  name={el.airCondGroup.name}
                  popular={el.airCondGroup.popular}
                  isView={isView}
               />
            );
         })}
      </div>
   );
}
export default ProductBody;
