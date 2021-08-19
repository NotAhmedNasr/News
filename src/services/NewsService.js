import axios from '../axios/axios';

export const getNews = (page, count = 10) => {
	return axios.get(`/news/?page=${page}&count=${count}`);
}

export const getAllSources = () => {
	return axios.get('/news/sources');
}