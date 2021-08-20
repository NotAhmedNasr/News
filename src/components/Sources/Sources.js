import { useContext, useEffect, useState } from 'react';
import { getAllSources } from '../../services/NewsService';
import { subscribeToSource, unsubscribeFromSource } from '../../services/UserService';
import SourceCards from './SourceCards/SourceCards';
import Style from './Sources.module.css';
import { UserContext } from '../../App';
import Spinner from '../Auxiliary/Spinner/Spinner';

const FILTERS = {
	ALL: '1',
	SUBSCRIBED: '2',
	UNSUBSCRIBED: '3',
};

const Sources = (props) => {
	const [sources, setSources] = useState(null);
	const [displayedSources, setDisplayedSources] = useState(null);
	const [selectedFilter, setSelectedFilter] = useState(FILTERS.ALL);

	const context = useContext(UserContext);


	useEffect(() => {
		didMount();
	}, []);

	const didMount = () => {
		getAllSources().then(res => {
			setSources(res.data);
			setDisplayedSources(res.data);
		}).catch(err => {
			console.log(err);
		});
	}

	const subscribe = (sourceId, e) => {
		e.target.disabled = true;
		subscribeToSource(sourceId).then(res => {
			e.target.disabled = false;
			context.setUser(res.data);
			removeIfSubcriptionChanged(sourceId);
		}).catch(err => {
			e.target.disabled = false;
			console.log(err);
		});
	}

	const unsubscribe = (sourceId, e) => {
		e.target.disabled = true;
		unsubscribeFromSource(sourceId).then(res => {
			e.target.disabled = false;
			context.setUser(res.data);
			removeIfSubcriptionChanged(sourceId);
		}).catch(err => {
			e.target.disabled = false;
			console.log(err);
		});
	}

	const filterChangeHandler = e => {
		setSelectedFilter(e.target.value);
		setDisplayedSources(filterSources(sources, e.target.value));
	}

	const filterSources = (data, filter) => {
		return data && data.filter(item => {
			switch (filter) {
				case FILTERS.ALL:
					return true;
				case FILTERS.SUBSCRIBED:
					return context.user.subscribtions.indexOf(item.id) !== -1;
				case FILTERS.UNSUBSCRIBED:
					return context.user.subscribtions.indexOf(item.id) === -1;
				default:
					return true;
			}
		});
	};

	const removeIfSubcriptionChanged = (sourceId) => {
		if (selectedFilter !== FILTERS.ALL) {
			const updated = displayedSources.filter(item => item.id !== sourceId);
			setDisplayedSources(updated);
		}
	}


	// UI Elements
	const UIheader = (
		<>
			<h1 className="heading">Available Sources</h1>
			<div className={Style.Filters}>
				<select className="form-control"
					value={selectedFilter}
					onChange={filterChangeHandler}
					disabled={!displayedSources}>
					<option value={FILTERS.ALL}>All</option>
					<option value={FILTERS.SUBSCRIBED}>Subscribed</option>
					<option value={FILTERS.UNSUBSCRIBED}>Unsubscribed</option>
				</select>
			</div>
		</>
	);

	const UIcontent =
		(
			<div className={Style.Source_container}>
				<SourceCards sources={displayedSources} subscribe={subscribe} unsubscribe={unsubscribe} />
			</div>
		);

	const UInoContent = (
		<h1 className="heading">No sources to show</h1>
	);

	const UIloader = (
		<div className={Style.Loading}>
			<Spinner />
		</div>
	);

	return (
		<div className="nav-padding">
			{UIheader}
			{
				displayedSources ?
					displayedSources.length > 0 ?
						UIcontent
						:
						UInoContent
					:
					UIloader
			}
		</div>
	);
}

export default Sources;