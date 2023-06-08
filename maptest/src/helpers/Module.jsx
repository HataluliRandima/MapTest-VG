import axios from "axios";
import { baseUrl } from "../constants/urll";

const Module = axios.create({
    baseURL: baseUrl,
});

export default Module;