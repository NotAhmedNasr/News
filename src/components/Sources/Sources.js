import SourceCards from './SourceCards/SourceCards';
import Style from './Sources.module.css';

const Sources = (props) => {
	return (
		<div className={Style.Source_container}>
			<SourceCards />
		</div>
	);
}

export default Sources;