import Style from './NewsCard.module.css';

const NewsCard = ({ item }) => {

	return (
		<div className={[Style.News, "card"].join(' ')}>
			<div className={Style.Card_img}>
				<img src={item.urlToImage} alt="news" />
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