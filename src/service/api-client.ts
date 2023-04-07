import axios, { CanceledError } from "axios";
import { getAuth } from "../config/api";

export default axios.create({
  auth: getAuth(),
});

export { CanceledError };
