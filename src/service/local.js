export const getLocalCookie = () => {
	const data = localStorage.getItem('cookieCheck');
	const cookieCheck = JSON.parse(data);
	return cookieCheck;
}

export const saveLocalCookie = (value) => {
	const data = JSON.stringify(value);
	localStorage.setItem('cookieCheck', data);
	return;
}
