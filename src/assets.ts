import { Assets, Exports } from './typings/assets.typings';
import sendRequest from './utils/send-request';
import endpoints from './utils/endpoints';

/**
 * Gets all asset paths in the current game version
 * @returns Array of paths
 */
async function getAssets(): Promise<Assets> {
  return await sendRequest<Assets>(endpoints.Assets);
}

/**
 * Gets all asset paths in the supplied pak number (does technically support pakchunk 0, 10, and 20, but it's not intended for that use)
 * @param pak Pak Number
 * @returns Array of Paths
 */
async function getAssetsFromPak(pak: string): Promise<Assets> {
  if (!pak) {
    throw new Error('Please provide a pak number');
  }

  const parsed = Number(pak);

  if (!parsed) {
    throw new Error('Please provide a valid pak number')
  };

  return await sendRequest<Assets>(`${endpoints.Assets_Dynamic}/${pak}`);
}

/**
 *  Gets the properties, or visible export, of a specified asset path.
 * @param path Path you want to export
 * @param raw Force Raw Export
 * @returns Json Export or if Image Buffr of the image
 */
async function exportPath(path: string, raw: boolean = false): Promise<Exports | Buffer | undefined> {
  if (!path) {
    throw new Error('Please provide a path you want to export');
  }

  const data = await sendRequest<Exports | Buffer>(endpoints.Assets_Export, {
    path,
    raw,
  });

  if (typeof data === 'object') {
    const result = await Promise.resolve(<Exports>data);

    return result;
  } else if (typeof data === 'string') {
    const data = await sendRequest<Buffer>(endpoints.Assets_Export, {
      path,
      raw,
    }, 'GET', {
      responseType: 'arraybuffer',
    });

    return data;
  }
}

export { getAssets, getAssetsFromPak, exportPath };
