"use client";

import { useAppSelector } from "../Hooks/ReduxHooks";
import { DataProps } from "./EquipList";
import Product from "../catalog/air-conditioners/Product";
import styles from "./Reusable.module.scss";

function ProductBody({ data }: { data: DataProps }) {
   const isView = useAppSelector((state) => state.ProductSlice.isLineView);
   return (
      <div className={`${styles.equip__body} ${isView ? styles.equip__bodyLine : ""}`}>
         {data.map((el) => {
            return <Product key={el.id} element={el} isView={isView} />;
         })}
      </div>
   );
}
export default ProductBody;
