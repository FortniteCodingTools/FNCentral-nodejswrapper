import axios, { AxiosRequestConfig } from 'axios';

const version = '1.3.0';

export default async <ResultType extends any>(url: string, params: Record<string, any> | null = null, method = 'GET', additionalOptions: AxiosRequestConfig<any> = {}): Promise<ResultType> => {
  const headers = {
    'User-Agent': `fncentralnodewrapper/${version}`,
  };

  const settings = {
    method,
    headers,
    ...additionalOptions,
  };

  if (method === 'GET') {
    settings.params = params;
  } else {
    settings.data = params;
  }

  const data = await axios(url, settings);

  switch (data.status) {
    case 404:
      throw new Error('Not Found');

    case 500:
      throw new Error('Internal Server Error');

    default:
      if (data.status < 200 || data.status > 299) {
        throw new Error(`Unknown Error: ${data.statusText}`);
      }
  }

  return data.data;
}
