import { useContext } from "react";
import { UserContext } from "../App";
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';	
import Navbar from "./Navbar/Navbar"

const Layout = (props) => {
	const context = useContext(UserContext);

	return (
		<>
			{context.user && <Navbar />}
			<ErrorBoundary>
				<main>
					{props.children}
				</main>
			</ErrorBoundary>
		</>
	)
}

export default Layout;