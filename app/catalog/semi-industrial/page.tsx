import EquipList from "@/app/Reusable/EquipList";
import ProductBody from "@/app/Reusable/ProductBody";
import fetchGraphql from "@/app/Utilities/FetchGraphql";
import Product from "./Product";

type DataInner = {
   id: string;
   semiIndustrialGroup: {
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
      semiIndustrials: {
         nodes: DataInner[];
      };
   };
};

const title = "Полупромышленные сплит-системы";

async function SemiIndustrial() {
   const data: Data = await fetchGraphql(`
   query {
      semiIndustrials {
        nodes {
          semiIndustrialGroup {
            name
            type
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
            {data.data.semiIndustrials.nodes.map((el) => {
               return <Product key={el.id} element={el} />;
            })}
         </ProductBody>
      </EquipList>
   );
}
export default SemiIndustrial;
