import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { login } from '../../services/UserService';

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [serverError, setServerError] = useState(false);
	const [disabled, setDisabled] = useState(false);

	const context = useContext(UserContext);

	const loginHandler = e => {
		setDisabled(true);
		login({ email, password }).then(res => {
			context.setUser(res.data);
			localStorage.setItem('Authorization', res.data.token);
			setDisabled(false);
		}).catch(err => {
			setDisabled(false);
			if (err.response.status === 401) {
				setServerError(true)
			}
		});
	}

	return (
		<div id="login" className="dialog card">
			<h1>
				Log in
			</h1>

			<div className="form">
				{serverError && <small className="invalid">Invalid email or password</small>}
				<div className="form-group">
					<label htmlFor="email" className="form-label">Email</label>
					<input type="text"
						id="email"
						className="form-control"
						value={email}
						disabled={disabled}
						onChange={e => setEmail(e.currentTarget.value)} />
				</div>

				<div className="form-group">
					<label htmlFor="password" className="form-label">Password</label>
					<input type="password"
						id="password"
						disabled={disabled}
						className="form-control"
						value={password}
						onChange={e => setPassword(e.currentTarget.value)} />
				</div>

				<button type="button"
					className="form-button"
					disabled={password === '' || email.trim() === '' || disabled}
					onClick={loginHandler}>Log in</button>

				<small>
					Don't have an account? <Link to="/signup">sign up!</Link>
				</small>
			</div>
		</div>
	);
}

export default Login;