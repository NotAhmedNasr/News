import Style from './NewsCard.module.css';

const NewsCard = ({ item }) => {

	return (
		<div className={[Style.News, "card"].join(' ')}>
			<div className={Style.Card_img}>
				<img src={item.urlToImage && item.urlToImage !== "null" ? item.urlToImage : 'https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1280/p:16x9/news_1920x1080.png'} alt="news" />
			</div>
			<div className={Style.Card_content}>
				<div className="floater">
					<span>{item.source.name}</span>
				</div>
				<h2 className={Style.Title}>{item.title}</h2>
				<div className={Style.Card_info}>
					<div>
						<span className={Style.Author}>{item.author || 'N/A'}</span>
					</div>
					<div>
						Published:&nbsp;
						<span className={Style.Date}>{(new Date(item.publishedAt)).toLocaleDateString()}</span>
					</div>
				</div>
				<p className={Style.Content}>
					{item.content.replace(/\[.*\]/g, '')}
				</p>
				<a href={item.url} rel="noreferrer" className={Style.Card_link} target="_blank">Read full article &gt;&gt;</a>
			</div>
		</div>
	);
};

export default NewsCard;