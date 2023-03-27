import {
  addaddress,
  addProfile,
  address,
  profile,
} from "./api/services/signup";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useState } from "react";

const Address = () => {
  const [dat, setDat] = useState("");
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery("address", address);

  const { mutate } = useMutation(addaddress, {
    onSuccess: (res) => {
      queryClient.invalidateQueries("address");
      setDat("");
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
      <div style={{ marginTop: "20px" }}>
        {data?.data?.map((item) => (
          <div style={{ border: "2px solid black", padding: "10px" }}>
            <div>{item?.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
