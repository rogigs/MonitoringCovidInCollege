import axios from "axios";
import { UserException } from "../exceptions";
// TODO: Create config axios
const backendUrl = "https://flask-covid-monitor.herokuapp.com/";

export const authLogin = ({ user, password }) => {
  axios
    .post(`${backendUrl}auth/login`, { code: user, password })
    .then((res) => res)
    .catch((e) => {
      throw new UserException("COULDNT_LOGIN", e);
    });
};
