import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:9000", // or your deployed backend URL
});

export default API;
