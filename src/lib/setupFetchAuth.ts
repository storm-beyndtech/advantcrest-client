import { getAuthToken } from "./authHeaders";

const originalFetch = window.fetch;

window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
	const token = getAuthToken();
	const headers = new Headers(init?.headers || {});

	if (token && !headers.has("Authorization")) {
		headers.set("Authorization", `Bearer ${token}`);
	}

	return originalFetch(input, {
		...init,
		headers,
	});
};
