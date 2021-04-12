import "isomorphic-fetch"

export function loginPerson(name,password) {
	return fetch('http:localhost:3001/Login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name, password})
	})
}