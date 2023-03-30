import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { signin } from "./api/services/signup";

const Login = () => {
  const [state, setState] = useState({ name: "", password: "" });
  const [resData, setResData] = useState({
    token: "",
    tenantId: "",
    subDomain: "",
  });
  const [isLogedIn, setIsLogedIn] = useState(false);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { mutate, isLoading } = useMutation(signin, {
    onSuccess: (res) => {
      Cookies.set("token", res.data.token);
      Cookies.set("tenantId", res?.data?.tenant?._id);
      Cookies.set("subDomain", res?.data?.tenant?.subdomain);
      window.location.href = `http://${res?.data?.tenant?.subdomain}.localhost:3000/profile`;
      setResData({
        token: res.data.token,
        tenantId: res?.data?.tenant?._id,
        subDomain: res?.data?.tenant?.subdomain,
      });
      setIsLogedIn(true);
    },
    onError: (err) => console.log(err),
  });

  useEffect(() => {
    if (resData.token) {
      window.location.href = `http://${resData?.subDomain}.localhost:3000/profile`;

      Cookies.set("token", resData.token);
      Cookies.set("tenantId", resData?.tenantId);
      Cookies.set("subDomain", resData?.subDomain);
    }
  }, [isLogedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    mutate(state);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input
          type="text"
          name="name"
          required
          onChange={handleChange}
          value={state.name}
        />
        <br />
        <label>password</label>
        <input
          type="text"
          name="password"
          required
          onChange={handleChange}
          value={state.password}
        />
        <br />
        <button type="submit">submit </button>
      </form>
    </div>
  );
};

export default Login;
