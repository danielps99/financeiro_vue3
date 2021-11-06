import axios, { AxiosInstance } from 'axios'

export default function createHttp() : AxiosInstance {
    const http = axios.create({
        baseURL: 'http://localhost:8888/api',
        headers: { "cliente": 'b787a4ab-30e3-46b6-927b-3660f75cd9df'},
    });
    return http
}