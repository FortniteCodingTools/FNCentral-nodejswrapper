import { Mappings } from "./typings/mappings.typings";
import endpoints from './utils/endpoints';
import formatVersion from './utils/format-version';
import sendRequest from './utils/send-request';

/**
 * Get the current or past mappings
 * @param version Version to get mappings for
 * @returns Mappings object with url to download
 */
async function getMappings(version?: string, platform?: "Android" | "Windows" | "all"): Promise<Mappings> {
  let reqversion;

  if (version) {
    reqversion = formatVersion(version);
  }

  const data = await sendRequest<Mappings>(endpoints.Mappings, {
    version: reqversion,
    platform,
  });

  return data;
}

export default getMappings
