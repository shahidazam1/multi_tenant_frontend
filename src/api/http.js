import axios from "axios";
import Cookies from "js-cookie";

Cookies.set("name", "shahid");
export const http = axios.create({
  baseURL: "http://localhost:8800",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}` || "",
    // cookie: Cookies.get("data") || "",
    Cookies: Cookies.get("data") || "",
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
