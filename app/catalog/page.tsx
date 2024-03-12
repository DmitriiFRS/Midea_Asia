import styles from "./Catalog.module.scss";

function Catalog() {
   return (
      <div className={styles.catalog}>
         <div className="container">
            <h2 className={styles.catalog__title}>Каталог оборудования</h2>
            <div className={styles.catalog__body}></div>
         </div>
      </div>
   );
}
export default Catalog;
