import axios from "axios";

const instance = axios.create({
    baseURL: "https://finlit-test.ru",
    // withCredentials: true,
    headers: {
        mode: 'Access-Control-Allow-Origin',
        accept: "application/json",
        "Content-Type": "application/json",
    }
})

export default instance;