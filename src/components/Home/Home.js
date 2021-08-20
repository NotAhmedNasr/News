import { useEffect, useState } from "react";
import { getNews } from "../../services/NewsService";
import Spinner from '../Auxiliary/Spinner/Spinner';
import NewsCards from "./NewsCards/NewsCards"
import Style from './Home.module.css';

const Home = (props) => {
	const [news, setNews] = useState(null);
	const [page, setPage] = useState(2);
	const [loading, setLoading] = useState(false);
	const [endOfData, setEndOfData] = useState(false);

	useEffect(() => {
		didMount();
	}, []);

	const didMount = () => {
		setLoading(true);
		getNews().then(res => {
			setNews(res.data);
		}).catch(err => {
			throw Error(err);
		}).finally(() => setLoading(false));
	}

	const getMoreNews = () => {
		setLoading(true);
		getNews(page).then(res => {
			if (res.data.length === 0) {
				setEndOfData(true);
				return;
			}

			const updated = [...news, ...res.data];
			setNews(updated);

			setPage(page + 1);
		}).catch(err => {
			setEndOfData(true);
		}).finally(() => setLoading(false));
	}

	// UI Elements
	const UIcontent = (
		<>
			<h1 className="heading">Latest News</h1>
			<div className={Style.News_container}>
				<NewsCards news={news} />
			</div>
			{
				!loading ?
					!endOfData && <button onClick={getMoreNews} className="form-button">Load more</button> :
					<div className={Style.Reloading}>
						<Spinner />
					</div>
			}
		</>
	);

	const UInoContent = (
		<h2 className="heading">Nothing to show! <br /> Subscribe to more Sources to see more articles!</h2>
	);

	const UIloader = (
		<div className={Style.Loading}>
			<Spinner />
		</div>
	);



	return (
		<div className="nav-padding">
			{
				news ?
					news.length > 0 ?
						UIcontent
						:
						UInoContent
					:
					UIloader
			}
		</div>
	);
}

export default Home;