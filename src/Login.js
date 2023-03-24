import { useState } from "react";
import { useMutation } from "react-query";
import { signin } from "./api/services/signup";

const Login = () => {
  const [state, setState] = useState({ name: "", password: "" });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { mutate, isLoading } = useMutation(signin, {
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      window.location.href = "/profile";
    },
    onError: (err) => console.log(err),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    mutate(state);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          required
          onChange={handleChange}
          value={state.name}
        />
        <input
          type="text"
          name="password"
          required
          onChange={handleChange}
          value={state.password}
        />
        <button type="submit">submit </button>
      </form>
    </div>
  );
};

export default Login;
