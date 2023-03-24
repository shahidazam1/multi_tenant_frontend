import { http } from "../http";

const signup = (data) => {
  return http.post("/auth/sign-up", data);
};

const signin = (data) => {
  return http.post("/auth/sign-in", data);
};

const profile = () => {
  return http.get("/profile/my-profile");
};
const addProfile = (data) => {
  return http.post("/profile", data);
};

export { signup, signin, profile, addProfile };
