import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import { logoutUser } from '../../services/Auth';
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
					<button type="button" className={Style.Link} onClick={logoutUser.bind(null, context)}>Log out</button>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;