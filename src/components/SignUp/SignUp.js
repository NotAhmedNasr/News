import { useFormik } from "formik";
import { Link } from "react-router-dom";


const SignUp = (props) => {

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
		onSubmit: value => {

		}
	});

	return (
		<div id="login" class="dialog card">
			<h1>
				Sign up
			</h1>

			<form class="form" onSubmit={formik.handleSubmit}>
				<div class="form-group">
					<label for="firstname" class="form-label">First name</label>
					<input 
						name='firstname'
						id="firstname"
						type='text'
						value={formik.values.firstname}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur} 
						class="form-control" />
					{formik.errors.firstname && formik.touched.firstname ? <small className="invalid">{formik.errors.firstname}</small> : null}
				</div>

				<div class="form-group">
					<label for="lastname" class="form-label">Last name</label>
					<input 
						name='lastname'
						id="lastname"
						type='text'
						value={formik.values.lastname}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur} 
						class="form-control" />
					{formik.errors.lastname && formik.touched.lastname ? <small className="invalid">{formik.errors.lastname}</small> : null}
				</div>

				<div class="form-group">
					<label for="email" class="form-label">Email</label>
					<input 
						name='email'
						id="email"
						type='text'
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur} 
						class="form-control" />
					{formik.errors.email && formik.touched.email ? <small className="invalid">{formik.errors.email}</small> : null}
				</div>

				<div class="form-group">
					<label for="password" class="form-label">Password</label>
					<input 
						name='password'
						id="password"
						type='password'
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur} 
						class="form-control"/>
					{formik.errors.password && formik.touched.password ? <small className="invalid">{formik.errors.password}</small> : null}
				</div>

				<button type="submit" class="form-button">Sign up</button>

				<small>
					Already have an account? <Link to="/login">log in!</Link>
				</small>
			</form>
		</div>
	);
}

export default SignUp;