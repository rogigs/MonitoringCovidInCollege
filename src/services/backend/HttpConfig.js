import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const backendUrl = "https://flask-covid-monitor.herokuapp.com/";

const withoutToken = axios.create({
  baseURL: `${backendUrl}`,
});

const withToken = axios.create({
  baseURL: `${backendUrl}`,
  headers: { "X-Custom-Header": cookies.get("token") },
});

export default {
  withToken,
  withoutToken,
};
