import styles from "./Contacts.module.scss";
import { FiPhone } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Titles() {
   return (
      <div className={styles.contacts__titleBody}>
         <div className={styles.contacts__phoneBody}>
            <FiPhone size={20} />
            <div className={styles.contacts__phone}>8 800-23456-05</div>
         </div>
         <div className={styles.contacts__emailBody}>
            <AiTwotoneMail size={20} />
            <div className={styles.contacts__email}>feedback@mdv-aircond.ru</div>
         </div>
         <div className={styles.contacts__social}>
            <div className={styles.contacts__socialTitle}>Мы в социальных сетях</div>
            <div className={styles.contacts__socialIcons}>
               <FaTelegramPlane />
               <FaWhatsapp />
               <FaInstagram />
               <FaFacebook />
            </div>
         </div>
         <div className={styles.contacts__description}>
            Чтобы связаться с нами — заполните форму справа. Наш менеджер свяжется с вами в ближайшее время.
         </div>
      </div>
   );
}
export default Titles;
