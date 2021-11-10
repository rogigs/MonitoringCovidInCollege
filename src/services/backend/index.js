import axios from "axios";
import { UserException } from "../exceptions";
// TODO: Create config axios
const backendUrl = "https://flask-covid-monitor.herokuapp.com/";

export const authLogin = async ({ user, password }) => {
  try {
    const { data } = await axios.post(`${backendUrl}auth/login`, {
      code: user,
      password,
    });

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
