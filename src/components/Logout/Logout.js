import { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../../App";

const Logout = () => {

	const context = useContext(UserContext);

	useEffect(() => {
		localStorage.removeItem('Authorization');
		context.setUser(null);
		
	}, [context]);

	return <Redirect to="Login" />
}

export default Logout;