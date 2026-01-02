import { getAuthToken } from "./authHeaders";

const originalFetch: typeof window.fetch = window.fetch.bind(window);

// Override global fetch to always attach auth header if available
window.fetch = ((input: RequestInfo | URL, init?: RequestInit) => {
	const token = getAuthToken();
	const headers = new Headers(init?.headers || {});

	if (token && !headers.has("Authorization")) {
		headers.set("Authorization", `Bearer ${token}`);
	}

	return originalFetch(input, {
		...init,
		headers,
	});
}) as typeof window.fetch;
