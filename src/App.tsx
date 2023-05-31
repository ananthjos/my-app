import { useState, useEffect } from "react";
import User from "./components/User";
import Loader from "./components/Loader";
import Button from "./components/Button";
import fetchUserDetails from "./services/user/fetchUserDetails";
import { getUserDetailObject, UserDetail, Response } from "./utils/utils";

import "./App.css";

function App(): JSX.Element {
  const [userDetail, setUserDetail] = useState<UserDetail>({} as UserDetail);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getUserDetails();
  }, []);

  async function getUserDetails(): Promise<void> {
    setIsLoading(true);
    const userDetailResponse: Response = await fetchUserDetails();
    const userDetailsObject: UserDetail =
      getUserDetailObject(userDetailResponse);
    setUserDetail(userDetailsObject);
    setIsLoading(false);
  }

  if (isLoading === true) {
    return <Loader />;
  }

  return (
    <div className='container-sm container-alignment '>
      <div>
        <User userDetail={userDetail} />
        <div className='text-center'>
          <Button text='Refresh' buttonAction={getUserDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
