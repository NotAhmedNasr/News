import Style from './NewsCard.module.css';

const NewsCard = (props) => {

	return (
		<div className={[Style.News, "card"].join(' ')}>
			<div className={Style.Card_img}>
				<img src="https://www.reuters.com/resizer/F1FyycVg-pLxip8Edr_fWZHmVJk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EK6PMWZN6VIL7OPUQBFJ5RDWJY.jpg" alt="news" />
			</div>
			<div className={Style.Card_content}>
				<div className="floater">
					<span>Reuters</span>
				</div>
				<h3 className={Style.Title}>Hong Kong's Lam tells solicitors' group to stay out of politics - Reuters</h3>
				<div className={Style.Card_info}>
					Published:&nbsp;
					<span className={Style.Date}>8/17/2021</span>
					&nbsp;by&nbsp;
					<span className={Style.Author}>Sara Cheng</span>
				</div>
				<p className={Style.Content}>
					Hong Kong Chief Executive Carrie Lam attends a news conference following the annual policy address in Hong Kong, China November 25, 2020. REUTERS/Lam YikHONG KONG, Aug 17 (Reuters) - Hong Kong's gove…
				</p>
				<a href="https://www.reuters.com/world/asia-pacific/hong-kongs-lam-tells-solicitors-group-stay-out-politics-2021-08-17/" rel="noreferrer" className={Style.Card_link} target="_blank">Read full article &gt;&gt;</a>
			</div>
		</div>
	);
};

export default NewsCard;