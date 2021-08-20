import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Style from './Navbar.module.css';

const Navbar = (props) => {
	const context = useContext(UserContext);

	return (
		<nav className={Style.Navbar}>
			<div className={Style.Logo}>
				<Link to="/">Keep Up!</Link>
			</div>
			<span className="spacer"></span>
			<div className={Style.User}>
				Welcom back, <span className={Style.Name}>{`${context.user.firstname} ${context.user.lastname}`}</span>!
			</div>
			<span className="spacer"></span>
			<ul className={Style.Nav}>
				<li>
					<Link to="/Sources">Sources</Link>
				</li>
				<li>
					<Link to="/logout">Log out</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;