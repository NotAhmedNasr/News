import { useFormik } from "formik";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { addUser } from "../../services/UserService";


const SignUp = (props) => {
	const context = useContext(UserContext);
	const [dupError, setDupError] = useState(false);
	const [disabled, setDisabled] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const isMounted = useRef(null);

	useEffect(() => {
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		}
	}, [])

	const validate = values => {
		const errors = {};

		if (!values.firstname) {
			errors.firstname = 'This field is required!';
		} else if (!values.firstname.match(/^[a-zA-Z]{2,50}$/)) {
			errors.firstname = 'Invalid First name!';
		}

		if (!values.lastname) {
			errors.lastname = 'This field is required!';
		} else if (!values.lastname.match(/^[a-zA-Z]{2,50}$/)) {
			errors.lastname = 'Invalid Last name!';
		}

		if (!values.email) {
			errors.email = 'This field is required!';
		} else if (!values.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
			errors.email = 'Invalid email!';
		}

		if (!values.password) {
			errors.password = 'This field is required!';
		} else if (!values.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
			errors.password = 'Password must be 8 characters or more and must include a letter, a number and a special character!';
		}

		return errors;
	}

	const formik = useFormik({
		initialValues: {
			firstname: '',
			lastname: '',
			email: '',
			password: '',
		},
		validate,
		onSubmit: values => {
			setDisabled(true);
			addUser(values).then(res => {
				context.setUser(res.data);
				localStorage.setItem('Authorization', res.data.token);
			}).catch(err => {
				if (isMounted.current)
					setDisabled(false);
				if (err.response.status === 409) {
					setDupError(true);
				}
			});
		}
	});

	return (
		<div id="login" className="dialog card">
			<h1>
				Sign up
			</h1>

			<form className="form" onSubmit={formik.handleSubmit}>
				<div className="form-group">
					<label htmlFor="firstname" className="form-label">First name</label>
					<input
						name='firstname'
						id="firstname"
						disabled={disabled}
						type='text'
						value={formik.values.firstname}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="form-control" />
					{formik.errors.firstname && formik.touched.firstname ? <small className="invalid">{formik.errors.firstname}</small> : null}
				</div>

				<div className="form-group">
					<label htmlFor="lastname" className="form-label">Last name</label>
					<input
						name='lastname'
						id="lastname"
						disabled={disabled}
						type='text'
						value={formik.values.lastname}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="form-control" />
					{formik.errors.lastname && formik.touched.lastname ? <small className="invalid">{formik.errors.lastname}</small> : null}
				</div>

				<div className="form-group">
					<label htmlFor="email" className="form-label">Email</label>
					<input
						name='email'
						id="email"
						disabled={disabled}
						type='text'
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="form-control" />
					{formik.errors.email && formik.touched.email ? <small className="invalid">{formik.errors.email}</small> : null}
					{dupError && <small className="invalid">This email is already used!</small>}
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
					<input
						name='password'
						id="password"
						disabled={disabled}
						type={showPassword ? 'text' : 'password'}
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						className="form-control" />
					
					{formik.errors.password && formik.touched.password ? <small className="invalid">{formik.errors.password}</small> : null}
				</div>

				<button type="submit"
					disabled={disabled}
					className="form-button">Sign up</button>

				<small>
					Already have an account? <Link to="/login">log in!</Link>
				</small>
			</form>
		</div>
	);
}

export default SignUp;