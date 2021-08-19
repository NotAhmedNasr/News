import { useContext } from 'react';
import Style from './SourceCard.module.css';
import { UserContext } from '../../../../App';

const SourceCard = ({ source, subscribe, unsubscribe }) => {
	const context = useContext(UserContext);
	
	const isSubscribedTo = () => {
		return context.user.subscribtions.indexOf(source.id) !== -1;
	}

	return (
		<div className={[Style.Source, 'card'].join(' ')}>
			<div className="floater">
				<span>{ source.category ? source.category.toUpperCase() : 'N/A' }</span>
				<span>{ `${source.language}-${source.country && source.country.toUpperCase()}` }</span>
			</div>
			<h2 className={Style.Card_title}>{ source.name }</h2>
			<p className={Style.Card_desc}>
				{ source.description }
			</p>
			<a href={ source.url } className={Style.Source_link} rel="noreferrer" target="_blank">Visit website!</a>
			<span className="spacer"></span>
			{
				!isSubscribedTo() ?
				<button className="form-button" type="button" onClick={() => subscribe(source.id)}>Subscribe</button> :
				<button className="form-button active" type="button" onClick={() => unsubscribe(source.id)}>Unsubscribe</button>
			}
		</div>
	);
};


export default SourceCard;