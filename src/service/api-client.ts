import axios from "axios";
import { getAuth } from "../config/api";

export default axios.create({
  auth: getAuth(),
});
