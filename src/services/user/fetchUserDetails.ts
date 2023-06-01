import axios from "axios";
import { checkForLocalStorage } from "../../utils/utils";

const fetchUserDetails = async () => {
  try {
    const response = await axios.get(`https://randomuser.me/api`);
    const { data } = response;
    const { results } = data;
    checkForLocalStorage(results[0]);

    return { result: results[0], status: response.status };
  } catch (e) {
    console.log(e);
  }
};

export default fetchUserDetails;
