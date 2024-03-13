import styles from "./Catalog.module.scss";
import Image from "next/image";

type Props = {
   img: {
      src: string;
   };
   name: string;
};

function ItemCard({ img, name }: Props) {
   return (
      <div className={styles.item}>
         <div className={styles.item__imgBody}>
            <Image src={img.src} alt="оборудование" fill objectFit="contain" />
         </div>
         <div className={styles.item__title}>{name}</div>
      </div>
   );
}
export default ItemCard;
