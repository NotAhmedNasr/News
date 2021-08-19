import { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { UserContext } from "../../App";
import { logoutUser } from '../../services/Auth';

const Logout = () => {

	const context = useContext(UserContext);

	useEffect(() => {
		logoutUser(context);
	}, [context]);

	return <Redirect to="Login" />
}

export default Logout;