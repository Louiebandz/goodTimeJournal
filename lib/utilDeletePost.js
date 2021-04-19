import "isomorphic-fetch"

export function deleteId(id) {
	console.log("1");
	return fetch(`http://localhost:3001/deleteEntry?journalID=${id}`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ id })
	})
	console.log("4");
}