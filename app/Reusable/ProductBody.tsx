"use client";

import { useAppSelector } from "../Hooks/ReduxHooks";
import { DataProps } from "./EquipList";
import Product from "../catalog/air-conditioners/Product";
import styles from "./Reusable.module.scss";

function ProductBody({ children }: { children: React.ReactNode }) {
   const isView = useAppSelector((state) => state.ProductSlice.isLineView);
   return <div className={`${styles.equip__body} ${isView ? styles.equip__bodyLine : ""}`}>{children}</div>;
}
export default ProductBody;
