import Breadcrumbs from "../Utilities/Breadcrumbs";
import GridView from "./GridView";
import ProductBody from "./ProductBody";
import styles from "./Reusable.module.scss";

export type DataInner = {
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

export type DataProps = DataInner[];

function EquipList({ data }: { data: DataProps }) {
   return (
      <section className={styles.equip}>
         <div className="container">
            <Breadcrumbs />
            <div className={styles.equip__titleContainer}>
               <h2 className={styles.equip__title}>Бытовые сплит-системы</h2>
               <GridView />
            </div>
            <ProductBody data={data} />
         </div>
      </section>
   );
}
export default EquipList;
