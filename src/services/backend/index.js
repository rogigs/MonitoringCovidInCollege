import axios from "axios";
import { UserException } from "../exceptions";
// TODO: Create config axios
const backendUrl = "https://flask-covid-monitor.herokuapp.com/";

export const authLogin = ({ user, password }, cb) => {
  axios
    .post(`${backendUrl}auth/login`, { code: user, password })
    .then((res) => cb(res.data))
    .catch((e) => cb(e.message));
};
