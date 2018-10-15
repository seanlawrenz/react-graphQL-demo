import fetch from 'cross-fetch';

export const APIRequest = async (businessEntitiyId, type, applicationId, param, requestMethod, body) => {
  const url = `api/1/${businessEntitiyId}/${type}/${applicationId}/webhook-config/${param}`;
  let data;
  try {
    const method = requestMethod === undefined ? 'GET' : requestMethod;

    if (body !== undefined) {
      body = await JSON.stringify(body);// eslint-disable-line no-param-reassign
    }

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json', // eslint-disable-line quote-props
      },
      method,
      body,
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    data = await response.json();
  } catch (error) {
    console.info(error);
  }
  return data;
};
