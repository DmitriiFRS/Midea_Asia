import styles from "./Main.module.scss";

function Portfolio() {
   return (
      <section className={styles.portfolio}>
         <div className={styles.portfolio__bg}></div>
         <h2 className={styles.portfolio__title}>ПОРТФОЛИО РАБОТ</h2>
         <div className={styles.portfolio__slider}>Slider</div>
      </section>
   );
}
export default Portfolio;
