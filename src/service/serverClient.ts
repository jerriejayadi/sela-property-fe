import axios from "axios";

const qs = require("qs");

// For server-side use only (SSR or Server Components)
const serverClient = axios.create({
  timeout: 200000,
  baseURL: process.env.HOST, // absolute URL required on server!
  headers: {
    Accept: "*/*",
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
});

// You can optionally inject tokens or API keys here
// serverClient.defaults.headers.common["X-Api-Key"] = process.env.API_KEY;

serverClient.interceptors.response.use(
  (resp) => resp.data,
  (error) => {
    // Don't use window here — log or handle differently
    if (error?.response?.status === 401) {
      console.error("Unauthorized on server side");
    }
    return Promise.reject(error);
  }
);

export default serverClient;
