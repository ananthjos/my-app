import { useState, useEffect } from "react";
import User from "./components/User";
import Loader from "./components/Loader";
import Button from "./components/Button";
import fetchUserDetails from "./services/user/fetchUserDetails";
import { getUserDetailObject, UserDetail, finalResponse } from "./utils/utils";

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
    const userDetailResponse: finalResponse | undefined =
      await fetchUserDetails();
    if (userDetailResponse?.status === 200) {
      const userDetailsObject: UserDetail = getUserDetailObject(
        userDetailResponse.result
      );
      setUserDetail(userDetailsObject);
    }
    setIsLoading(false);
  }

  if (isLoading === true) {
    return <Loader />;
  }

  return (
    <div className='container-sm container-alignment '>
      {userDetail.name ? (
        <div>
          <User userDetail={userDetail} />
          <div className='text-center'>
            <Button text='Refresh' buttonAction={getUserDetails} />
          </div>
        </div>
      ) : (
        <div className='card'>
          <div className='card-body'>No Data Available</div>
        </div>
      )}
    </div>
  );
}

export default App;
