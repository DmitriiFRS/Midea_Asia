import styles from "./ItemCard.module.scss";
import Image from "next/image";

function Img({ image, name }: { image: string; name: string }) {
   return (
      <div className={styles.main__imgBody}>
         <Image src={image} alt={`Кондиционер ${name}`} fill style={{ objectFit: "contain" }} />
      </div>
   );
}
export default Img;
