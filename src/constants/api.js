export const APIRequest = async (businessEntitiyId, type, applicationId, param) => {
  const url = `api/1/${businessEntitiyId}/${type}/${applicationId}/webhook-config/${param}`;
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json', // eslint-disable-line quote-props
      },
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.info(error);
  }
};
