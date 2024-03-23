import fetchGraphql from "@/app/Utilities/FetchGraphql";
import styles from "../../../Reusable/ItemCard/ItemCard.module.scss";
import bg from "../../../../public/img/item_bg.jpg";
import Image from "next/image";
import ItemBG from "@/app/Reusable/ItemCard/ItemBG";
import Breadcrumbs from "@/app/Utilities/Breadcrumbs";
import Table from "@/app/Reusable/ItemCard/Table";
import Params from "@/app/Reusable/ItemCard/Params";
import Img from "@/app/Reusable/ItemCard/Img";
import Description from "@/app/Reusable/ItemCard/Description";

export type DataInner = {
   id: string;
   airCondGroup: {
      name: string;
      popular: boolean;
      url: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

type Data = {
   data: {
      airconds: {
         nodes: DataInner[];
      };
   };
};

async function slug({ params }: { params: { slug: string } }) {
   const { slug } = params;
   const data: Data = await fetchGraphql(`
   query {
      airconds {
        nodes {
         id
          airCondGroup {
            name
            popular
            url
            image {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
   `);
   return (
      <div className={styles.item}>
         <ItemBG bg={bg} />
         <div className={`container ${styles.item__container}`}>
            <Breadcrumbs />
            <div className={styles.item__body}>
               <h2 className={styles.item__title}>Инверторные сплит-системы</h2>
               {data.data.airconds.nodes.map((el) => {
                  if (slug === el.airCondGroup.url) {
                     return (
                        <div key={el.id} className={`${styles.item__main} ${styles.main}`}>
                           <h3 className={styles.main__title}>Серия кондиционеров {el.airCondGroup.name}</h3>
                           <div className={styles.main__preview}>
                              <Img image={el.airCondGroup.image.node.sourceUrl} name={el.airCondGroup.name} />
                              <Params />
                           </div>
                           <Table name={el.airCondGroup.name} />
                           <Description name={el.airCondGroup.name} />
                        </div>
                     );
                  }
               })}
            </div>
         </div>
      </div>
   );
}
export default slug;
