import styles from "./Contacts.module.scss";
import { FiPhone } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

function Titles() {
   return (
      <div className={styles.contacts__titleBody}>
         <a href={"tel://88002345605"} className={styles.contacts__phoneBody}>
            <FiPhone size={40} />
            <div className={styles.contacts__phone}>8 800-23456-05</div>
            <span className={styles.contacts__line}></span>
         </a>
         <a href="mailto:feedback@mdv-aircond.ru" className={styles.contacts__emailBody}>
            <AiTwotoneMail size={40} />
            <div className={styles.contacts__email}>feedback@mdv-aircond.ru</div>
            <span className={styles.contacts__line}></span>
         </a>
         <div className={styles.contacts__social}>
            <div className={styles.contacts__socialTitle}>Мы в социальных сетях</div>
            <div className={styles.contacts__socialIcons}>
               <Link href="#">
                  <FaTelegramPlane size={30} color="#00AEEF" />
               </Link>
               <Link href="#">
                  <FaWhatsapp size={30} color="#31BC32" />
               </Link>
               <Link href="#">
                  <FaInstagram size={30} color="#CD176A" />
               </Link>
               <Link href="#">
                  <FaFacebook size={30} color="#38529A" />
               </Link>
            </div>
         </div>
         <div className={styles.contacts__description}>
            Чтобы связаться с нами — заполните форму справа. Наш менеджер свяжется с вами в ближайшее время.
         </div>
      </div>
   );
}
export default Titles;
