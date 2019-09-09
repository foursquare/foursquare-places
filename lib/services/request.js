import axios from "axios";
export default async urlString => {
  try {
    const { data } = await axios.get(urlString);
    return data;
  } catch (error) {
    throw error;
  }
};

/*
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
*/
