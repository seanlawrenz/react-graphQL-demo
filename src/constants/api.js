export const APIRequest = async (businessEntitiyId, type, applicationId, param) => {
  const url = `api/1/${businessEntitiyId}/${type}/${applicationId}/webhook-config/${param}`;
  let data;
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

    data = await response.json();
  } catch (error) {
    console.info(error);
  }
  return data;
};
