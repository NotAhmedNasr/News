import { Route, Switch } from 'react-router';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Sources from './components/Sources/Sources';
import Layout from './layout/Layout';

function App() {
	return (
		<div className="container">
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />

					<Route exact path="/login">
						<Login />
					</Route>

					<Route exact path="/signup">
						<SignUp />
					</Route>

					<Route exact path="/sources" component={Sources} />
				</Switch>
			</Layout>
		</div>
	);
}

export default App;