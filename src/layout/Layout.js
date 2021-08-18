import { useContext } from "react";
import { UserContext } from "../App";
import Navbar from "./Navbar/Navbar"

const Layout = (props) => {
	const context = useContext(UserContext);

	return (
		<>
			{context.user && <Navbar />}
			<main>
				{props.children}
			</main>
		</>
	)
}

export default Layout;