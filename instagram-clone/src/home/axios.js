import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:9005"
})
export default instance