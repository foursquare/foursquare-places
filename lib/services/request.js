import axios from "axios";
export default async urlString => {
  try {
    const { data } = await axios.get(urlString);
    return data;
  } catch (error) {
    throw error;
  }
};
