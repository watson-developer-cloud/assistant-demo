const fetchMessage = (text, context) => {
  const payload = {
    input: { text },
    context,
  };

  return new Promise((resolve, reject) => {
    fetch('/api/message', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
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

export default fetchMessage;
