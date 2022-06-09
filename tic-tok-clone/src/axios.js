import axios from 'axios'

const instance = axios.create({
    baseURL: "https://tic-tok-backendapp.herokuapp.com/",
});

export default instance;