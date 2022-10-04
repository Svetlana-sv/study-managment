import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/';

export default () => {
    return axios.create({
        baseURL: BASE_URL
    })
};
