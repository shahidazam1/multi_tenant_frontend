import { addProfile, profile } from "./api/services/signup";
import { useMutation, useQuery } from "react-query";
import { useState } from "react";

const Profile = () => {
  const [dat, setDat] = useState("");
  const { data, isLoading } = useQuery("profile", profile);

  const { mutate } = useMutation(addProfile, {
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      window.location.href = "/profile";
    },
    onError: (err) => console.log(err),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ address: dat });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="address"
          value={dat}
          onChange={(e) => setDat(e.target.value)}
        />
        <button>submit</button>
      </form>
      Profile: {data?.data?.address}
    </div>
  );
};

export default Profile;
