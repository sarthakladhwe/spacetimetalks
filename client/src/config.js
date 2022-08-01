import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "https://spacetimetalks.herokuapp.com/api/"
})