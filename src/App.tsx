import { useState, useEffect } from "react";
import User from "./components/User";
import Button from "./components/Button";
import fetchUserDetails from "./services/user/fetchUserDetails";
import { getUserDetailObject } from "./utils/utils";

import "./App.css";

interface UserDetail {
  name: Name;
  email: string;
}

interface Name {
  first: string;
  last: string;
  title: string;
}

function App(): JSX.Element {
  const [userDetail, setUserDetail] = useState<UserDetail>({} as UserDetail);

  useEffect(() => {
    getUserDetails();
  }, []);

  async function getUserDetails(): Promise<void> {
    const userDetailResponse = await fetchUserDetails();
    const userDetailsObject: UserDetail =
      getUserDetailObject(userDetailResponse);
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
