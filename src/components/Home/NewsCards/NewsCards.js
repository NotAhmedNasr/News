import NewsCard from "./NewsCard/NewsCard"

const NewsCards = ({ news }) => {

	return (
		<>
			{ news.map(item => {
				return <NewsCard key={item.title} item={item}/>
			}) }
		</>
	);
};

export default NewsCards;