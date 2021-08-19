import Style from './Spinner.module.css';

const Spinner = props => {

	return (
		<div className={Style.Spinner}>
			<div className={Style.Double_bounce1}></div>
			<div className={Style.Double_bounce2}></div>
		</div>
	);
}

export default Spinner;