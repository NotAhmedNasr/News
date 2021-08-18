import Style from './Navbar.module.css';

const Navbar = (props) => {

	return (
		<nav className={Style.Navbar}>
			<div className={Style.Logo}>
				<a href="./Home.html">NEWS</a>
			</div>
			<ul className={Style.Nav}>
				<li><a href="./Sources.html">Manage Sources</a></li>
				<li><a href="./Login.html">Log out</a></li>
			</ul>
		</nav>
	);
}

export default Navbar;