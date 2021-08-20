import { createContext, useEffect, useMemo, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import AppLoadingScreen from './components/Auxiliary/AppLoadingScreen/AppLoadingScreen';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Sources from './components/Sources/Sources';
import LoginWrapper from './hoc/LoginWrapper/LoginWrapper';
import Layout from './layout/Layout';
import { getCurrentUser } from './services/UserService';

export const UserContext = createContext(null);

function App() {
	const [user, setUser] = useState(null);
	const [isValidSession, setIsValidSession] = useState(false);

	const userContextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

	useEffect(() => {
		didMount();
	}, []);

	const didMount = () => {
		getCurrentUser().then(res => {
			setUser(res.data);
			setIsValidSession(true);
		}).catch(err => {
			setUser(null);
			setIsValidSession(true);
		});
	}

	return (
		isValidSession ?
			<div className="container">
				<UserContext.Provider value={userContextValue}>
					<Layout>
						<Switch>
							<Route exact path="/login">
								{user ? <Redirect to="/" /> :
									(
										<LoginWrapper>
											<Login />
										</LoginWrapper>
									)}
							</Route>

							<Route exact path="/signup">
								{user ? <Redirect to="/" /> :
									(
										<LoginWrapper>
											<SignUp />
										</LoginWrapper>
									)}
							</Route>

							<Route exact path="/sources">
								{user ? <Sources /> : <Redirect to="/login" />}
							</Route>

							<Route exact path="/">
								{user ? <Home /> : <Redirect to="/login" />}

							</Route>
						</Switch>
					</Layout>
				</UserContext.Provider>
			</div>
			:
			<AppLoadingScreen />
	);
}

export default App;
