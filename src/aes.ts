import axios from "axios";
import { Aes } from "./typings/aes.typings";

/**
 * Get current or past AES keys
 * @param version Version to get AES from
 * @returns AES for the version, pak keys and pak info
 */
async function getAes(version? : string): Promise<Aes> {
  let reqversion;
  if (version) {
    const parsedNumber = parseFloat(version)
    if (parsedNumber && parsedNumber > 0 && parsedNumber < 100) {
      reqversion = parsedNumber.toFixed(2);;
    } else throw new Error("Invalid Version Submitted")
  }
  const data = await axios.get("https://fortnitecentral.gmatrixgames.ga/api/v1/aes", {
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

export default getAes