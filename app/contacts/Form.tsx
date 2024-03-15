import styles from "./Contacts.module.scss";

function Form() {
   return (
      <form className={styles.contacts__form}>
         <div className={styles.contacts__inputs}>
            <div className={`${styles.contacts__inputBody} ${styles.contacts__inputBody1}`}>
               <input type="text" placeholder="Как к вам обращаться?" />
            </div>
            <div className={`${styles.contacts__inputBody} ${styles.contacts__inputBody2}`}>
               <input type="text" placeholder="Город" />
            </div>
            <div className={`${styles.contacts__inputBody} ${styles.contacts__inputBody3}`}>
               <input type="text" placeholder="Телефон" />
            </div>
            <div className={`${styles.contacts__inputBody} ${styles.contacts__inputBody4}`}>
               <input type="text" placeholder="E-mail" />
            </div>
            <div className={`${styles.contacts__inputBody} ${styles.contacts__inputBody5}`}>
               <textarea name="message" placeholder="Сообщение"></textarea>
            </div>
         </div>
         <div className={styles.contacts__inputAccept}>
            <button className={styles.contacts__inputAcceptBtn}>
               <span>Отправить</span>
            </button>
         </div>
      </form>
   );
}
export default Form;
