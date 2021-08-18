import axios from "../axios/axios"

export const addUser = user => {
	return axios.post('/user', user);
}

export const login = login => {
    return axios.post('/user/login', login);
};

export const getCurrentUser = () => {
	return axios.get('/user/');
}