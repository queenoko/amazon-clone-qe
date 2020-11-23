import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-qe/us-centra11/api' //THE API (cloud function) URL
});

export default instance;