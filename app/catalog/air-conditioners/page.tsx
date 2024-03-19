import fetchGraphql from "@/app/Utilities/FetchGraphql";
import EquipList from "../../Reusable/EquipList";

async function AirCond() {
   const data = await fetchGraphql(`
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
   return <EquipList data={data.data.airconds.nodes} />;
}
export default AirCond;
