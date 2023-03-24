import { useState } from "react";
import { signup } from "./api/services/signup";
import { useMutation } from "react-query";

const SignUp = () => {
  const [state, setState] = useState({ name: "", password: "", database: "" });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { mutate, isLoading } = useMutation(signup, {
    onSuccess: (res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      // window.location.href = "/profile";
    },
    onError: (err) => console.log(err),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <input
          type="text"
          name="database"
          required
          onChange={handleChange}
          value={state.database}
        />
        <button type="submit">submit </button>
      </form>
    </div>
  );
};

export default SignUp;
