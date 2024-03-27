import Breadcrumbs from "../Utilities/Breadcrumbs";
import styles from "./About.module.scss";
import Image from "next/image";
import bg1 from "../../public/img/about/bg1.jpg";

function About() {
   return (
      <div className={styles.about}>
         <div className={styles.about__bgTopBody}>
            <Image src={bg1} alt="о компании" fill style={{ objectFit: "cover" }} />
         </div>
         <div className={`container ${styles.about__container}`}>
            <Breadcrumbs />
         </div>
      </div>
   );
}
export default About;
