import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../public/icons/MideaLogo.png";
import Link from "next/link";
import { nav } from "../Data/Nav.data";

function Header() {
   return (
      <header className={`${styles.header} header`}>
         <div className={`${styles.header__container} container`}>
            <Link href={"/"} className={styles.header__logo}>
               <Image src={logo} alt="logo" fill />
            </Link>
            <nav className={styles.header__nav}>
               <ul className={styles.header__navList}>
                  {nav.map((el) => {
                     return (
                        <li key={el.id} className={styles.header__navItem}>
                           <Link className={styles.header__navLink} href={el.href}>
                              {el.name}
                              <span></span>
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>
            <button className={styles.header__phone}>+998(97) 333-63-57</button>
         </div>
      </header>
   );
}
export default Header;
