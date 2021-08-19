import { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { login } from '../../services/UserService';
import { loginUser } from "../../services/Auth";

const Login = (props) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [serverError, setServerError] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const context = useContext(UserContext);

	const isMounted = useRef(null);

	useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		}
	}, []);

	const loginHandler = e => {
		setDisabled(true);
		login({ email, password }).then(res => {
			loginUser(context, res.data);
		}).catch(err => {
			if (err.response.status === 401) {
				setServerError(true)
			}

			if (isMounted.current) {
				setDisabled(false);
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
					<span style={{float: 'right'}}>
						<input type="checkbox" 
							style={{marginTop: 10}} 
							checked={showPassword} 
							onChange={() => setShowPassword(!showPassword)}/>
						<small>Show</small>
					</span>
					<input id="password"
						type={showPassword ? 'text' : 'password'}
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