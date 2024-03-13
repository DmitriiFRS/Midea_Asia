import styles from "./page.module.scss";
import Video from "./Homepage/Video";
import Description from "./Homepage/Description";
import description1 from "../public/img/description1.jpg";
import description2 from "../public/img/description2.jpg";
import Portfolio from "./Homepage/Portfolio";
import Catalog from "./Homepage/Catalog";

const description = [
   {
      imgOrder: 1,
      titleOrder: 2,
      margin: "0 0 0 -120px",
      id: 0,
      img: description1,
      title: "Наше видение, миссия и ценности",
      subtitle: [
         "Обладая более чем 30-летним опытом работы в промышленности, мы занимаем первое место в мире по количеству поставляемых единиц продукции в сфере обработки воздуха.",
         "В настоящее время Midea осуществляет многомиллионные инвестиции в развитие производства чиллеров. С 1999 года компания сфокусировалась на исследованиях и разработках и конкурирует за счет передовых технологий.",
      ],
   },
   {
      imgOrder: 2,
      titleOrder: 1,
      margin: "0 -120px 0 0",
      id: 1,
      img: description2,
      title: "Ведущий производитель климатического оборудования",
      subtitle: [
         "Обладая более чем 30-летним опытом работы в промышленности, мы занимаем первое место в мире по количеству поставляемых единиц продукции в сфере обработки воздуха.",
         "В настоящее время Midea осуществляет многомиллионные инвестиции в развитие производства чиллеров. С 1999 года компания сфокусировалась на исследованиях и разработках и конкурирует за счет передовых технологий.",
      ],
   },
];

export default function Home() {
   return (
      <>
         <Video />
         <div className={styles.homepage}>
            <div className="container">
               <Catalog />
               {description.map((el) => {
                  return (
                     <Description
                        key={el.id}
                        imgOrder={el.imgOrder}
                        titleOrder={el.titleOrder}
                        margin={el.margin}
                        img={el.img}
                        title={el.title}
                        subtitle={el.subtitle}
                     />
                  );
               })}
               <Portfolio />
            </div>
         </div>
      </>
   );
}
