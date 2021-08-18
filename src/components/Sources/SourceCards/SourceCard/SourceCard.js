import Style from './SourceCard.module.css';

const SourceCard = (props) => {

	return (
		<div className={[Style.Source, 'card'].join(' ')}>
			<div className="floater">
				<span>General</span>
				<span>en-us</span>
			</div>
			<h2 className={Style.Card_title}>ABC News (AU)</h2>
			<p className={Style.Card_desc}>
				Australia's most trusted source of local, national and world news. Comprehensive, independent,
				in-depth
				analysis, the latest business, sport, weather and more.
			</p>
			<a href="http://www.abc.net.au/news" className={Style.Source_link} rel="noreferrer" target="_blank">Visit website!</a>
			<button className="form-button" type="button">Subscribe</button>
		</div>
	);
};


export default SourceCard;