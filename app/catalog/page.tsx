import styles from "./Catalog.module.scss";
import alba from "../../public/img/catalog/Alba.png";
import semiIndustrial from "../../public/img/catalog/semi-industrial.png";
import VRF from "../../public/img/catalog/VRF.png";
import atom from "../../public/img/catalog/atom.png";
import chiller from "../../public/img/catalog/chiller.png";
import fancoil from "../../public/img/catalog/fancoil.png";
import condensed from "../../public/img/catalog/condensed.png";
import rooftop from "../../public/img/catalog/rooftop.png";
import multi from "../../public/img/catalog/multi.png";
import ItemCard from "./ItemCard";
import Breadcrumbs from "../Utilities/Breadcrumbs";

const items = [
   {
      id: 0,
      name: "Бытовые сплит-системы",
      img: alba,
      href: "/catalog/air-conditioners",
   },
   {
      id: 1,
      name: "Полупромышленные сплит-системы",
      img: semiIndustrial,
      href: "/catalog/semi-industrial",
   },
   {
      id: 2,
      name: "VRF-системы",
      img: VRF,
      href: "/catalog/vrf",
   },
   {
      id: 4,
      name: "Чиллеры",
      img: chiller,
      href: "/",
   },
   {
      id: 5,
      name: "Фанкойлы",
      img: fancoil,
      href: "/",
   },
   {
      id: 6,
      name: "Компрессорно-конденсаторные блоки",
      img: condensed,
      href: "/",
   },
   {
      id: 7,
      name: "Руфтопы",
      img: rooftop,
      href: "/",
   },
];

function Catalog() {
   return (
      <div className={styles.catalog}>
         <div className="container">
            <h2 className={styles.catalog__title}>Каталог оборудования</h2>
            <Breadcrumbs />
            <div className={styles.catalog__body}>
               {items.map((el) => {
                  return <ItemCard key={el.id} img={el.img} name={el.name} href={el.href} />;
               })}
            </div>
         </div>
      </div>
   );
}
export default Catalog;
