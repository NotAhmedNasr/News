import axios from '../axios/axios';

export const getAllNews = () => {
	return axios.get('/news/');
}

export const getAllSources = () => {
	return axios.get('/news/sources');
}