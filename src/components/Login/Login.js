import { Link } from "react-router-dom";

const Login = (props) => {
	return (
		<div id="login" className="dialog card">
			<h1>
				Log in
			</h1>

			<div className="form">
				<div className="form-group">
					<label for="email" className="form-label">Email</label>
					<input type="text" id="email" className="form-control" />
				</div>

				<div className="form-group">
					<label for="password" className="form-label">Password</label>
					<input type="password" id="password" className="form-control" />
				</div>

				<button type="button" className="form-button">Log in</button>

				<small>
					Don't have an account? <Link to="/signup">sign up!</Link>
				</small>
			</div>
		</div>
	);
}

export default Login;