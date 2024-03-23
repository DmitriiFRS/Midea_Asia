import styles from "./ItemCard.module.scss";

function Table({ name }: { name: string }) {
   return (
      <div className={`${styles.main__table} ${styles.table}`}>
         <h3 className={styles.table__title}>Все модели серии {name} Inverter, характеристики</h3>
         <div className={styles.table__body}>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Модели</div>
               <div className={`${styles.table__col} ${styles.table__colHeader}`}>MDSC-07HRDN8</div>
               <div className={`${styles.table__col} ${styles.table__colHeader}`}>MDSC-09HRDN8</div>
               <div className={`${styles.table__col} ${styles.table__colHeader}`}>MDSC-12HRDN8</div>
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Номинальная холодопроизводительность, кВт</div>
               <div className={styles.table__col}>2,34 (1,17 - 2,94)</div>
               <div className={styles.table__col}>2,34 (1,17 - 2,94)</div>
               <div className={styles.table__col}>2,34 (1,17 - 2,94)</div>
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Номинальная теплопроизводительность, кВт</div>
               <div className={styles.table__col}>2,43 (0,90 - 2,98)</div>
               <div className={styles.table__col}>2,43 (0,90 - 2,98)</div>
               <div className={styles.table__col}>2,43 (0,90 - 2,98)</div>
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Уровень шума внутреннего блока, дБ(А)</div>
               <div className={styles.table__col}>35/30,5/24,5</div>
               <div className={styles.table__col}>35/30,5/24,5</div>
               <div className={styles.table__col}>35/30,5/24,5</div>
            </div>
            <div className={styles.table__row}>
               <div className={styles.table__header}>Уровень шума наружного блока, дБ(А)</div>
               <div className={styles.table__col}>52,5</div>
               <div className={styles.table__col}>52,5</div>
               <div className={styles.table__col}>52,5</div>
            </div>
            <div className={styles.table__row}>
               <div className={`${styles.table__header} ${styles.table__lastCol}`}>Цена: UZS</div>
               <div className={`${styles.table__col} ${styles.table__lastCol}`}>2000000</div>
               <div className={`${styles.table__col} ${styles.table__lastCol}`}>20000003</div>
               <div className={`${styles.table__col} ${styles.table__lastCol}`}>200000045</div>
            </div>
         </div>
      </div>
   );
}
export default Table;
