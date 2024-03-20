import fetchGraphql from "@/app/Utilities/FetchGraphql";
import Product from "./Product";
import EquipList from "@/app/Reusable/EquipList";
import ProductBody from "@/app/Reusable/ProductBody";

export type DataInner = {
   id: string;
   vrfMiniGroup: {
      name: string;
      type: string[];
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};

type Data = {
   data: {
      vrfsMini: {
         nodes: DataInner[];
      };
   };
};

const title = "Мини VRF блоки";

async function VrfMini() {
   const data: Data = await fetchGraphql(`
   {
      vrfsMini {
        nodes {
          vrfMiniGroup {
            name
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
            {data.data.vrfsMini.nodes.map((el) => {
               return <Product key={el.id} element={el} />;
            })}
         </ProductBody>
      </EquipList>
   );
}
export default VrfMini;
