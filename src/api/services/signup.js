import { http } from "../http";

const signup = (data) => {
  return http.post("/auth/sign-up", data);
};

const signin = (data) => {
  return http.post("/auth/sign-in", data);
};

const profile = () => {
  return http.get("/profile");
};
const addProfile = (data) => {
  return http.post("/profile", data);
};

const tenant = () => {
  return http.get("/tenant");
};
const addtenant = (data) => {
  return http.post("/tenant", data);
};

const address = () => {
  return http.get("/address");
};
const addaddress = (data) => {
  return http.post("/address", data);
};
export {
  signup,
  signin,
  profile,
  addProfile,
  addtenant,
  tenant,
  address,
  addaddress,
};
