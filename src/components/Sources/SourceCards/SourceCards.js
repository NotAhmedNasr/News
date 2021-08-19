import SourceCard from "./SourceCard/SourceCard"


const SourceCards = ({ sources, subscribe, unsubscribe }) => {


	return (
		<>
			{ sources.map(source => {
				return <SourceCard key={source.id} source={source} subscribe={subscribe} unsubscribe={unsubscribe} />;
			}) }
		</>
	);
};

export default SourceCards;