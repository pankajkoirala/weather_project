import axios from "axios";
import { REACT_APP_BACKEND_URL, token_key } from "../const";

let headers = { "Content-Type": "application/json" };

let AxiosInstance = axios.create({
  method:"get",
  base_URL: REACT_APP_BACKEND_URL,
  headers,
});

export default AxiosInstance;
