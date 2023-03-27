import { useState } from "react";
import { signup, tenant } from "./api/services/signup";
import { useMutation, useQuery } from "react-query";
import Cookies from "js-cookie";

const SignUp = () => {
  const [state, setState] = useState({ name: "", password: "", tenantId: "" });
  const handleChange = (e) => {
    console.log(e.target.value);
    setState({ ...state, [e.target.name]: e.target.value });
  };
  console.log(state);
  const { data, isLoading } = useQuery("tenant", tenant);

  console.log(data?.data);

  const { mutate } = useMutation(signup, {
    onSuccess: (res) => {
      console.log(res);
      Cookies.set("token", res.data.token);
      Cookies.set("tenantId", res?.data?.tenant?._id);
      Cookies.set("subDomain", res?.data?.tenant?.subdomain);
      window.location.href = `http://${res?.data?.tenant?.subdomain}.localhost:3000/profile`;
      window.location.href = `http://${res?.data?.tenant?.subdomain}.localhost:3000/profile`;
    },
    onError: (err) => console.log(err),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(state);
  };

  if (isLoading) return <p>loading....</p>;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name : </label>
        <input
          type="text"
          name="name"
          required
          onChange={handleChange}
          value={state.name}
        />
        <br />
        <ladel>password : </ladel>
        <input
          type="text"
          name="password"
          required
          onChange={handleChange}
          value={state.password}
        />
        <br />
        <label>tenant : </label>
        <select
          style={{ width: 200 }}
          type="text"
          name="tenantId"
          required
          onChange={handleChange}
          value={state.tenantId}
        >
          {data?.data?.map((i) => (
            <option value={i._id}>{i.subdomain}</option>
          ))}
          <option value="qq1">khgh</option>
          <option value="qq2">khgh</option>
          <option value="qq3">khgh</option>
        </select>
        <br />

        <button type="submit">submit </button>
      </form>
    </div>
  );
};

export default SignUp;
