import fetchGraphql from "@/app/Utilities/FetchGraphql";
import EquipList from "@/app/Reusable/EquipList";
import Product from "./Product";
import ProductBody from "@/app/Reusable/ProductBody";

export type DataInner = {
   id: string;
   vrfGroup: {
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
      vrfs: {
         nodes: DataInner[];
      };
   };
};

const title = "Наружные VRF блоки";

async function VrfOuter() {
   const data: Data = await fetchGraphql(`
   {
      vrfs {
        nodes {
         id
          vrfGroup {
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
            {data.data.vrfs.nodes.map((el) => {
               return <Product key={el.id} element={el} />;
            })}
         </ProductBody>
      </EquipList>
   );
}
export default VrfOuter;
