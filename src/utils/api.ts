const getAuthToken = () => localStorage.getItem("authToken");

export const apiFetch = (
	url: string,
	{ requiresAuth = true, headers = {}, ...rest }: RequestInit & { requiresAuth?: boolean } = {},
) => {
	const h = new Headers(headers);
	if (requiresAuth) {
		const t = getAuthToken();
		if (t && !h.has("Authorization")) h.set("Authorization", `Bearer ${t}`);
	}
	return fetch(url, { ...rest, headers: h });
};

export const apiGet = (url: string, requiresAuth = true) =>
	apiFetch(url, { method: "GET", requiresAuth });

export const apiPost = (url: string, data?: any, requiresAuth = true) => {
	const isFormData = data instanceof FormData;
	const headers: Record<string, string> | undefined = isFormData
		? undefined
		: { "Content-Type": "application/json" };
	return apiFetch(url, {
		method: "POST",
		headers,
		body: isFormData ? data : data ? JSON.stringify(data) : undefined,
		requiresAuth,
	});
};

export const apiPut = (url: string, data?: any, requiresAuth = true) => {
	const isFormData = data instanceof FormData;
	const headers: Record<string, string> | undefined = isFormData
		? undefined
		: { "Content-Type": "application/json" };
	return apiFetch(url, {
		method: "PUT",
		headers,
		body: isFormData ? data : data ? JSON.stringify(data) : undefined,
		requiresAuth,
	});
};

export const apiDelete = (url: string, requiresAuth = true, body?: any) => {
	const isFormData = body instanceof FormData;
	const headers = isFormData ? {} : body ? { "Content-Type": "application/json" } : {};
	return apiFetch(url, {
		method: "DELETE",
		headers,
		body: isFormData ? body : body ? JSON.stringify(body) : undefined,
		requiresAuth,
	});
};
