export const APIRequest = (businessEntitiyId, type, applicationId, param) => {
  const url = `api/1/${businessEntitiyId}/${type}/${applicationId}/webhook-config/${param}`;

  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json', // eslint-disable-line quote-props
    },
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};
