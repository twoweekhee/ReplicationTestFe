import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://localhost:80",  // Nginx 로드 밸런서의 주소
    timeout: 3000,
    headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
    responseType: "json",
});
