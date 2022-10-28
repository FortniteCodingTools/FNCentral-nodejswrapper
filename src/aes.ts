import { Aes } from "./typings/aes.typings";
import endpoints from './utils/endpoints';
import formatVersion from './utils/format-version';
import sendRequest from './utils/send-request';

/**
 * Get current or past AES keys
 * @param version Version to get AES from
 * @returns AES for the version, pak keys and pak info
 */
async function getAes(version?: string): Promise<Aes> {
  let reqversion;

  if (version) {
    reqversion = formatVersion(version);
  }

  const data = await sendRequest<Aes>(endpoints.Aes, {
    version: reqversion,
  });

  return data;
}

export default getAes
