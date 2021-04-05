import "isomorphic-fetch"

export function deletePerson(name) {
	console.log("I'm here");
	console.log(name);
	return fetch(`http://localhost:3001/delete?username=${name}`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name })
	})
}



