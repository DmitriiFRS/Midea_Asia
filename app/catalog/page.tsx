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
   },
   {
      id: 1,
      name: "Мультисплит-системы",
      img: multi,
   },
   {
      id: 2,
      name: "Полупромышленные сплит-системы",
      img: semiIndustrial,
   },
   {
      id: 3,
      name: "VRF-системы",
      img: VRF,
   },
   {
      id: 4,
      name: "Мини VRF-система серии ATOM",
      img: atom,
   },
   {
      id: 5,
      name: "Чиллеры",
      img: chiller,
   },
   {
      id: 6,
      name: "Фанкойлы",
      img: fancoil,
   },
   {
      id: 7,
      name: "Компрессорно-конденсаторные блоки",
      img: condensed,
   },
   {
      id: 8,
      name: "Руфтопы",
      img: rooftop,
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
                  return <ItemCard key={el.id} img={el.img} name={el.name} />;
               })}
            </div>
         </div>
      </div>
   );
}
export default Catalog;
