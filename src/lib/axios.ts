import axios from "axios";


const baseURL = process.env.NEXT_PUBLIC_URL_API
const baseTwoURL = process.env.NEXT_PUBLIC_URL_API_TWO
const apiKey = process.env.NEXT_PUBLIC_API_KEY

const customAxios = axios.create({
    baseURL: baseURL + '/api',
})

export const customAxiosWithToken = axios.create({
    baseURL: baseTwoURL + '/api',
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
})



export default customAxios