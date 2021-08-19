import { useContext, useEffect, useState } from 'react';
import { getAllSources } from '../../services/NewsService';
import { subscribeToSource, unsubscribeFromSource } from '../../services/UserService';
import SourceCards from './SourceCards/SourceCards';
import Style from './Sources.module.css';
import { UserContext } from '../../App';

const Sources = (props) => {
	const [sources, setSources] = useState([]);
	const context = useContext(UserContext);

	useEffect(() => {
		getAllSources().then(res => {
			setSources(res.data);
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

	return (
		<div className={Style.Source_container}>
			<SourceCards sources={sources} subscribe={subscribe} unsubscribe={unsubscribe} />
		</div>
	);
}

export default Sources;