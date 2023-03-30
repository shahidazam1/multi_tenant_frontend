import axios from "axios";
import Cookies from "js-cookie";

export const http = axios.create({
  baseURL: "http://localhost:880",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("token")}` || "",
    tenantId: Cookies.get("tenantId") || "",
  },
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    if (err.message === "Network Error") {
      console.log("error", err);
      alert("Network Error");
    }
    if (
      err.response.data.statusCode === 401 &&
      err.response.config.method === "get"
    ) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);
