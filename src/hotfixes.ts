import axios from "axios";
import { Hotfixes } from "./typings/hotfixes.typings";

async function getHotfixes(lang: string = "en"): Promise<Hotfixes>{
    const req = await axios.get("https://fortnitecentral.gmatrixgames.ga/api/v1/hotfixes", {
        params : {
            lang
        }
    })
    if(!req.data) throw new Error("Error while requesting hotfixes")
    return req.data;
}

export default getHotfixes