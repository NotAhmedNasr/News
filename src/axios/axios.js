const { default: axios } = require("axios");


const axiosInstance = axios.create({
	baseURL: 'http://localhost:8000/api',
});

axiosInstance.interceptors.request.use(config => {
	config.headers['Authorization'] = localStorage.getItem('Authorization');
    return config;
}, err => {
	return Promise.reject(err);
});

export default axiosInstance;