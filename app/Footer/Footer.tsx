import styles from "./Footer.module.scss";
import logo from "../../public/icons/MideaLogo.png";
import Image from "next/image";
import Link from "next/link";
import { FiPhone } from "react-icons/fi";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { nav } from "../Data/Data.nav";

function Footer() {
   return (
      <footer className={`footer ${styles.footer}`}>
         <div className={styles.footer__inner}>
            <div className={`${styles.footer__container} container`}>
               <Link className={styles.footer__imgBody} href={"#"}>
                  <Image src={logo} alt="midea" fill />
               </Link>
               <nav className={styles.footer__nav}>
                  <h4 className={styles.footer__navTitle}>Навигация</h4>
                  <ul className={styles.footer__navList}>
                     {nav.map((el) => {
                        return (
                           <Link style={{ color: "inherit" }} key={el.id} href={el.href}>
                              <li className={styles.footer__navLink}>{el.name}</li>
                           </Link>
                        );
                     })}
                  </ul>
               </nav>
               <div className={styles.footer__contacts}>
                  <h4 className={styles.footer__navTitle}>Контакты</h4>
                  <div className={styles.footer__navBody}>
                     <FiPhone size={20} />
                     <Link href={"#"} style={{ color: "inherit" }} className={styles.footer__phone}>
                        +998(97) 333-63-57{" "}
                     </Link>
                  </div>
                  <div className={styles.footer__navBody}>
                     <AiTwotoneMail size={20} />
                     <Link href={"#"} style={{ color: "inherit" }} className={styles.footer__email}>
                        inbox@midea-asia.uz
                     </Link>
                  </div>
                  <div className={styles.footer__iconsBody}>
                     <Link className={styles.footer__icon} href={"#"}>
                        <FaFacebookF color="#888888" size={35} />
                     </Link>
                     <Link className={styles.footer__icon} href={"#"}>
                        <CiInstagram color="#888888" size={35} />
                     </Link>
                     <Link className={styles.footer__icon} href={"#"}>
                        <FaTelegramPlane color="#888888" size={35} />
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
}
export default Footer;
