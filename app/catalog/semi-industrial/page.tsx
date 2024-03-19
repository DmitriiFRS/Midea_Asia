import EquipList from "@/app/Reusable/EquipList";
import fetchGraphql from "@/app/Utilities/FetchGraphql";

async function SemiIndustrial() {
   const data = await fetchGraphql(`
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
   return <EquipList data={data.data.semiIndustrials.nodes} />;
}
export default SemiIndustrial;
