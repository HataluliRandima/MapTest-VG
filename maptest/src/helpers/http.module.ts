import axios from "axios";
import { baseUrl } from "../constants/urll";

const httpModule = axios.create({
    baseURL: baseUrl,
});

export default httpModule;