import axios from "axios";

const client = axios.create({
  baseURL: "https://kiekky.webhostingfree.io/public/api",
  // withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export const apiCall = async ({ ...options }) => {
  const onSuccess = (response) => response.data;
  return client(options).then(onSuccess);
};
