import axios from "redaxios"

const backendConnector = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL+'',
    headers: {
        "Content-Type": "application/json",
    },
})

export default backendConnector