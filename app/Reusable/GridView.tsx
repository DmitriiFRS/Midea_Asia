"use client";

import styles from "./Reusable.module.scss";

import { MdViewList } from "react-icons/md";
import { MdGridView } from "react-icons/md";
import { setLineView } from "../Redux/Product.slice";
import { useAppDispatch } from "../Hooks/ReduxHooks";

function GridView() {
   const dispatch = useAppDispatch();
   function lineViewActive() {
      dispatch(setLineView(true));
   }
   function gridViewActive() {
      dispatch(setLineView(false));
   }
   return (
      <div className={styles.equip__gridView}>
         <MdViewList onClick={lineViewActive} size={30} />
         <MdGridView onClick={gridViewActive} size={30} />
      </div>
   );
}
export default GridView;
