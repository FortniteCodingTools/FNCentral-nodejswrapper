import { Assets } from "./typings/assets.typings";
import axios from "axios"

/**
 * Gets all asset paths in the current game version
 * @returns Array of paths
 */
async function getAssets() : Promise<Assets> {
    return await (await (axios.get("https://fortnitecentral.gmatrixgames.ga/api/v1/assets"))).data
}

/**
 * Gets all asset paths in the supplied pak number (does technically support pakchunk 0, 10, and 20, but it's not intended for that use)
 * @param pak Pak Number
 * @returns Array of Paths
 */
async function getAssetsFromPak(pak : string): Promise<Assets> {
    if(!pak) throw new Error("Please provide a pak number")
    const parsed = parseInt(pak)
    if(!parsed) throw new Error("Please provide a valid pak number")
    const req = await axios.get(`https://fortnitecentral.gmatrixgames.ga/api/v1/assets/dynamic/${pak}`, {
    
  })
  .catch(err => {
    if(err.status) throw new Error("Request error")
    else throw new Error(err)
  })
  if(!req) throw new Error("Uncatched error")
  return req.data
}

export { getAssets, getAssetsFromPak }