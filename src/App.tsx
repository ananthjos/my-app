import { useState, useEffect } from "react";
import User from "./components/User";
import Button from "./components/Button";
import fetchUserDetails from "./services/user/fetchUserDetails";
import { getUserDetailObject } from "./utils/utils";

import "./App.css";

function App() {
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    getUserDetails();
  }, []);

  async function getUserDetails() {
    const userDetailResponse = await fetchUserDetails();
    const userDetailsObject = getUserDetailObject(userDetailResponse);
    setUserDetail(userDetailsObject);
  }

  return (
    <>
      <User userDetail={userDetail} />
      <Button text='refresh' buttonAction={getUserDetails} />
    </>
  );
}

export default App;
