import { Assets, Exports } from './typings/assets.typings';
import axios from 'axios';

/**
 * Gets all asset paths in the current game version
 * @returns Array of paths
 */
async function getAssets(): Promise<Assets> {
  return await (
    await axios.get('https://fortnitecentral.gmatrixgames.ga/api/v1/assets')
  ).data;
}

/**
 * Gets all asset paths in the supplied pak number (does technically support pakchunk 0, 10, and 20, but it's not intended for that use)
 * @param pak Pak Number
 * @returns Array of Paths
 */
async function getAssetsFromPak(pak: string): Promise<Assets> {
  if (!pak) throw new Error('Please provide a pak number');
  const parsed = Number(pak);
  if (!parsed) throw new Error('Please provide a valid pak number');
  const req = await axios
    .get(`https://fortnitecentral.gmatrixgames.ga/api/v1/assets/dynamic/${pak}`, {})
    .catch((err) => {
      if (err.status) throw new Error('Request error');
      else throw new Error(err);
    });
  if (!req) throw new Error('Uncatched error');
  return req.data;
}

/**
 *  Gets the properties, or visible export, of a specified asset path.
 * @param path Path you want to export
 * @param raw Force Raw Export
 * @returns Json Export or if Image Buffr of the image
 */
async function exportPath(path: string, raw?: boolean): Promise<Exports | Buffer | undefined> {
  if (!path) {
    throw new Error('Please provide a path you want to export');
  } else {
    const req = await axios
      .get(`https://fortnitecentral.gmatrixgames.ga/api/v1/export`, {
        params: {
          path,
          raw,
        },
      })
      .catch(() => {
        throw new Error('Path not found');
      });
    if (req && req.data) {
      if (typeof req.data === 'object') {
        const result = await Promise.resolve(req.data);
        return result;
      } else if (typeof req.data === 'string') {
        const buf = await axios({
          url: `https://fortnitecentral.gmatrixgames.ga/api/v1/export`,
          responseType: 'arraybuffer',
          params: {
            path,
            raw,
          },
        });
        return buf.data
      }
    } else throw new Error('Uncatched error');
  }
}

async function downloadFile(url: string): Promise<Buffer> {
  return (await axios({ url, responseType: 'arraybuffer' })).data;
}

export { getAssets, getAssetsFromPak, exportPath };
