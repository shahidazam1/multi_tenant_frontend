import { addProfile, profile } from "./api/services/signup";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";

const Profile = () => {
  const [dat, setDat] = useState("");
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery("profile", profile);

  const { mutate } = useMutation(addProfile, {
    onSuccess: (res) => {
      queryClient.invalidateQueries("profile");
      setDat("");
    },
    onError: (err) => console.log(err),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ note: dat });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="note"
          value={dat}
          onChange={(e) => setDat(e.target.value)}
        />
        <button>submit</button>
      </form>
      <div>
        {data?.data?.map((item) => (
          <div style={{ border: "2px solid black", padding: "10px" }}>
            <div>{item?.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
