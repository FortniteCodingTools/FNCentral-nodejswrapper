import axios from "axios";
import { Mappings } from "./typings/mappings.typings";

/**
 * Get the current or past mappings
 * @param version Version to get mappings for
 * @returns Mappings object with url to download
 */
async function getMappings(version: string): Promise<Mappings> {
  let reqversion;
  if (version) {
    const parsedNumber = parseFloat(version)
    if (parsedNumber && parsedNumber > 0 && parsedNumber < 100) {
      reqversion = parsedNumber.toFixed(2);;
    } else throw new Error("Invalid Version Submitted")
  }
  const data = await axios.get("https://fortnitecentral.gmatrixgames.ga/api/v1/mappings", {
    params : {
        version : reqversion
    }
  })
  .catch(err => {
    if(err.status) throw new Error("Version not found")
    else throw new Error(err)
  })
  if(!data) throw new Error("Uncatched error")
  return data.data
}

export default getMappings