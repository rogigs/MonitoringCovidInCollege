import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const backendUrl = "https://flask-covid-monitor.herokuapp.com/";

const withoutToken = axios.create({
  baseURL: `${backendUrl}`,
});

const withToken = axios.create({
  baseURL: `${backendUrl}`,
  headers: {
    Authorization:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjb2RlIjoiNDE5OTQ0MzQiLCJmdWxsX25hbWUiOiJJZ29yIEdvbWVzIFNvYXJlcyIsInBhc3N3b3JkIjoiZ0FBQUFBQmhpY0F1Um0yVExjNFA1dmJlUkY1T0xibTF3OFYwUXJmTFJfSGlIMFdiOFd5RjNDaTBpbDItNFpoWUJmRUE4WVBfTGhHUFh0alAtQ2FrQU9scDR1WHhDT0ZXcmc9PSIsImNpdHkiOiJOb25lIiwidWYiOiJOb25lIiwicGVybWlzc2lvbiI6OSwic2VjdG9yIjoiTm9uZSJ9.hD9rYOkCUiy9HBj01_FbWbefvPvfVZ1HWMK5fWcGaaI",
  },
});

export default {
  withToken,
  withoutToken,
};
