import { Hotfixes } from "./typings/hotfixes.typings";
import endpoints from './utils/endpoints';
import sendRequest from './utils/send-request';

async function getHotfixes(lang: string = "en"): Promise<Hotfixes> {
  const data = await sendRequest<Hotfixes>(endpoints.Hotfixes, {
    lang,
  })

  return data;
}

export default getHotfixes
