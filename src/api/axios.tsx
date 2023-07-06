import axios from "axios";
import { BASE_URL } from "./url";
export const ApiRequest = axios.create({
    baseURL:BASE_URL,
});