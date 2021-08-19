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

export const subscribeToSource = sourceId => {
    return axios.patch(`/user/subscribe/${sourceId}`);
};

export const unsubscribeFromSource = sourceId => {
    return axios.patch(`/user/unsubscribe/${sourceId}`);
};

