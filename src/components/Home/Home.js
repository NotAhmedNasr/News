import { useEffect, useState } from "react";
import { getAllNews } from "../../services/NewsService";
import NewsCards from "./NewsCards/NewsCards"
import Style from './Home.module.css';

const Home = (props) => {
	const [news, setNews] = useState([]);
	
	useEffect(() => {
		getAllNews().then(res => {
			setNews(res.data);
		}).catch(err => {
			console.log(err);
		});
	}, []);

	return (
		<div className={Style.News_container}>
			<NewsCards news={news} />
		</div>
	);
}

export default Home;