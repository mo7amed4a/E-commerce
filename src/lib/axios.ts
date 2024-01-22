import axios from "axios";


const baseURL = process.env.NEXT_PUBLIC_URL_API
const apiKey = process.env.NEXT_PUBLIC_API_KEY


const customAxios = axios.create({
    baseURL,
    // headers: {
    //     Authorization: `Bearer ${apiKey}`
    // }
})

export default customAxios