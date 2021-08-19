import { useContext, useEffect, useState } from 'react';
import { getAllSources } from '../../services/NewsService';
import { subscribeToSource, unsubscribeFromSource } from '../../services/UserService';
import SourceCards from './SourceCards/SourceCards';
import Style from './Sources.module.css';
import { UserContext } from '../../App';
import Spinner from '../Auxiliary/Spinner/Spinner';

export const FILTERS = {
	all: '1',
	sub: '2',
	unsub: '3',
};

const Sources = (props) => {
	const [sources, setSources] = useState(null);
	const [filtered, setFiltered] = useState(null);

	const context = useContext(UserContext);

	const [selectedFilter, setSelectedFilter] = useState(FILTERS.all);

	useEffect(() => {
		getAllSources().then(res => {
			setSources(res.data);
			setFiltered(res.data);
		}).catch(err => {
			console.log(err);
		});
	}, []);

	const subscribe = (sourceId) => {
		subscribeToSource(sourceId).then(res => {
			context.setUser(res.data);
		}).catch(err => {
			console.log(err);
		});
	}

	const unsubscribe = (sourceId) => {
		unsubscribeFromSource(sourceId).then(res => {
			context.setUser(res.data);
		}).catch(err => {
			console.log(err);
		});
	}

	const filterChangeHandler = e => {
		setSelectedFilter(e.target.value);
		setFiltered(filterSources(sources, e.target.value));
	}

	const filterSources = (data, filter) => {
		return data && data.filter(item => {
			switch (filter) {
				case FILTERS.all:
					return true;
				case FILTERS.sub:
					return context.user.subscribtions.indexOf(item.id) !== -1;
				case FILTERS.unsub:
					return context.user.subscribtions.indexOf(item.id) === -1;
				default:
					return true;
			}
		});
	};

	const content =
		<div className={Style.Source_container}>
			<SourceCards sources={filtered} subscribe={subscribe} unsubscribe={unsubscribe} />
		</div>;
	return (
		<div>
			<h1 className="heading">Available Sources</h1>
			<div className={Style.Filters}>
				<select className="form-control" value={selectedFilter} onChange={filterChangeHandler}>
					<option value={FILTERS.all}>All</option>
					<option value={FILTERS.sub}>Subscribed</option>
					<option value={FILTERS.unsub}>Unsubscribed</option>
				</select>
			</div>
			{
				filtered ? content :
					<div className={Style.Loading}>
						<Spinner />
					</div>
			}
		</div>
	);
}

export default Sources;