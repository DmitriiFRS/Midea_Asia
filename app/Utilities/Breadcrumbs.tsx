"use client";
import { usePathname } from "next/navigation";
import styles from "./Utilities.module.scss";
import Link from "next/link";

function Breadcrumbs() {
   const paths = usePathname();
   const pathNames = paths.split("/").filter((path) => path);
   const titleRouter = ["Главная"];
   return (
      <div className={styles.bc}>
         {paths.split("/").map((el, index) => {
            let href = `/${pathNames.slice(0, index).join("/")}`;
            if (el === "catalog") titleRouter.push("Каталог");
            else if (el === "projects") titleRouter.push("Выполненные проекты");
            else if (el === "contacts") titleRouter.push("Контакты");
            else if (el === "air-conditioners") titleRouter.push("Бытовые сплит-системы");
            else if (el === "semi-industrial") titleRouter.push("Полупромышленные сплит-системы");
            else if (el === "vrf") titleRouter.push("VRF-Системы");
            else if (el === "outer") titleRouter.push("Наружные блоки VRF");
            else if (el === "mini") titleRouter.push("Наружные блоки VRF");
            else if (el) titleRouter.push(el);
            return (
               <div className={styles.bc__link} key={index}>
                  {titleRouter[index - 1] ? <span>/</span> : ""}
                  <Link className={styles.bc__linkInner} href={href}>
                     {titleRouter[index]}
                  </Link>
                  {titleRouter[index + 1] ? <span>/</span> : ""}
               </div>
            );
         })}
      </div>
   );
}
export default Breadcrumbs;
