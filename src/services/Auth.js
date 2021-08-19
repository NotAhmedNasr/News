
export const logoutUser = userContext => {
	localStorage.removeItem('Authorization');
	userContext.setUser(null);
}

export const loginUser = (userContext, userData) => {
	localStorage.setItem('Authorization', userData.token);
	userContext.setUser(userData);
}