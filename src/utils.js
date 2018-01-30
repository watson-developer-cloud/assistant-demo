const executeAction = (endpoint, value) => {
  const parameterizedEndpoint = `${endpoint}?value=${value}`;

  return new Promise((resolve, reject) => {
    fetch(parameterizedEndpoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((data) => {
        data.json()
          .then((json) => {
            resolve(json);
          });
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};

export default executeAction;
