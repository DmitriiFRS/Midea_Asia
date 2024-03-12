import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../public/icons/MideaLogo.png";
import Link from "next/link";
const nav = [
   {
      name: "О компании",
      id: 0,
      href: "/catalog",
   },
   {
      name: "Каталог продукции",
      id: 1,
      href: "/catalog",
   },
   {
      name: "Выполненные проекты",
      id: 2,
      href: "/catalog",
   },
   {
      name: "Контакты",
      id: 3,
      href: "/catalog",
   },
   {
      name: "Медиафайлы",
      id: 4,
      href: "/catalog",
   },
];

function Header() {
   return (
      <header className={`${styles.header} header`}>
         <div className={`${styles.header__container} container`}>
            <Link href={"#"} className={styles.header__logo}>
               <Image src={logo} alt="logo" fill />
            </Link>
            <nav className={styles.header__nav}>
               <ul className={styles.header__navList}>
                  {nav.map((el) => {
                     return (
                        <li key={el.id} className={styles.header__navItem}>
                           <Link className={styles.header__navLink} href={el.href}>
                              {el.name}
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
