import axios from 'axios';

const baseUrl = "http://localhost:3000";

export const sendGet = (path) => {
    return axios.get(baseUrl + path)
        .then((result) => {
            return result.data;
        })
        .catch(e => console.error(e));
}

export const sendPost = async (path, body) => {
    return axios.post(baseUrl + path, body)
        .then(res => console.log(res))
        .catch(e => console.error(e));
}

export const sendDelete = async (path) => {
    return axios.delete(baseUrl + path)
        .then(res => console.log(res))
        .catch(e => console.error(e));
}