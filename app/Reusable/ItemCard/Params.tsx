import styles from "./ItemCard.module.scss";

function Params() {
   return (
      <div className={styles.main__mainParams}>
         <div className={styles.main__mainParams__body}>
            <div className={styles.main__mainParams__icon}>A</div>
            <div className={styles.main__mainParams__title}>Класс эфергоэффективности А</div>
         </div>
         <div className={styles.main__mainParams__body}>
            <div className={styles.main__mainParams__icon}>GMCC</div>
            <div className={styles.main__mainParams__title}>надежный японский компрессор</div>
         </div>
      </div>
   );
}
export default Params;
