export default urlString =>
  new Promise((resolve, reject) => {
    fetch(urlString)
      .then(response => response.json())
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
