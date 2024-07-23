import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:5116/api/',
    headers: {
        "Content-Type": "application/json"
    }
})

export  {api};
