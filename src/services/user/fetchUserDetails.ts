import axios from "axios";
import { saveUserDetails } from "../../utils/utils";
import { Response } from "../../utils/utils";

const fetchUserDetails = async (): Promise<Response> => {
  const response = await axios.get(`https://randomuser.me/api`);
  const { data } = response;
  const { results } = data;

  if (localStorage.getItem("userDetails")) {
    saveUserDetails(results[0]);
  } else {
    localStorage.setItem("userDetails", JSON.stringify([]));
  }

  return results[0];
};

export default fetchUserDetails;
