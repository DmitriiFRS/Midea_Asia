import fetchGraphql from "@/app/Utilities/FetchGraphql";
import EquipList from "../../Reusable/EquipList";
import ProductBody from "@/app/Reusable/ProductBody";
import Product from "./Product";

type DataInner = {
   id: string;
   airCondGroup: {
      name: string;
      popular: boolean;
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

const title = "Бытовые сплит-системы";

async function AirCond() {
   const data: Data = await fetchGraphql(`
   query {
      airconds {
        nodes {
          id
          airCondGroup {
            name
            popular
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
      <EquipList title={title}>
         <ProductBody>
            {data.data.airconds.nodes.map((el) => {
               return <Product key={el.id} element={el} />;
            })}
         </ProductBody>
      </EquipList>
   );
}
export default AirCond;
