import Navbar from "./Navbar/Navbar"

const Layout = (props) => {

	return (
		<>
			<Navbar />
			<main>
				{props.children}
			</main>
		</>
	)
}

export default Layout;