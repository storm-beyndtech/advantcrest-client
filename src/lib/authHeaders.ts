export const getAuthToken = () => {
	try {
		return localStorage.getItem("authToken") || "";
	} catch (error) {
		return "";
	}
};

export const withAuthHeaders = (headers: HeadersInit = {}) => {
	const token = getAuthToken();
	return token ? { ...headers, Authorization: `Bearer ${token}` } : headers;
};

export const persistSession = (user: any, token?: string) => {
	if (user) {
		localStorage.setItem("user", JSON.stringify(user));
	}
	if (token) {
		localStorage.setItem("authToken", token);
	}
};

export const clearSession = () => {
	localStorage.removeItem("user");
	localStorage.removeItem("authToken");
};
