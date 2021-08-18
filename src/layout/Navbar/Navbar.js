import { Link } from 'react-router-dom';
import Style from './Navbar.module.css';

const Navbar = (props) => {

	return (
		<nav className={Style.Navbar}>
			<div className={Style.Logo}>
				<Link to="/">NEWS</Link>
			</div>
			<ul className={Style.Nav}>
				<li>
					<Link to="/Sources">Manage Sources</Link>
				</li>
				<li>
					<Link to="/Login">Log out</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;