// This component has child 2 and child2 has child3
// In child 2 we are updating the state and in child 3 we are printing the address
// We are providing the State data's from child 2 to child 3 using use context

import { useContext } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import MyContext from "./myContecxt";

export const Child3 = () => {
  // From here we are taking the state data's from useContext and using it
  const { address, setAddress } = useContext(MyContext);
  setAddress("Not found");
  return (
    <div>
      <h2>Child3: Address: </h2>
      <div>{JSON.stringify(address)}</div>
    </div>
  );
};

const Child2 = () => {
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState({});

  useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(`https://api.postalpincode.in/pincode/${pinCode}`)
        .then((response) => {
          setAddress(response.data[0]);
        });
    }, 2000);

    return () => clearTimeout(getData);
  }, [pinCode]);

  return (
    <React.Fragment>
      <MyContext.Provider value={{ pinCode, setPinCode, address, setAddress }}>
        Child2:{" "}
        <input
          placeholder="Search Input.."
          onChange={(event) => setPinCode(event.target.value)}
        />
        <Child3 />
      </MyContext.Provider>
    </React.Fragment>
  );
};

export default Child2;
