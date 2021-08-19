import React from 'react'


class ErrorBoundary extends React.Component {

	state = {
		hasError: false,
		errMessage: ''
	}

	componentDidCatch(error, info) {
		this.setState({
			hasError: true,
			errMessage: error,
		});
	}

	render() {
		return (
			this.state.hasError ?
			<h1 className="heading">
				Something went wrong!
			</h1> : this.props.children
		)
	}
}

export default ErrorBoundary;