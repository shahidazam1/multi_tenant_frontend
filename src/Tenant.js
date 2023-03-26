import { useState } from "react";
import { addtenant, signup } from "./api/services/signup";
import { useMutation } from "react-query";

const Tenant = () => {
  const [state, setState] = useState({ subdomain: "", databaseName: "" });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { mutate, isLoading } = useMutation(addtenant, {
    onSuccess: (res) => {
      window.location.href = "/signup";
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
        <label>subdomain : </label>
        <input
          type="text"
          name="subdomain"
          required
          onChange={handleChange}
          value={state.subdomain}
        />
        <br />
        <label>databaseName : </label>
        <input
          style={{ width: 200 }}
          type="text"
          name="databaseName"
          required
          onChange={handleChange}
          value={state.databaseName}
        />
        <br />
        <button type="submit">submit </button>
      </form>
    </div>
  );
};

export default Tenant;
