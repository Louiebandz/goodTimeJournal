require("isomorphic-fetch");

function viewJournal(id) {
	return fetch(`http://localhost:3001/viewJournal?id=${id}`).then(function(resp) {
		return resp.json();
	});
}

function handleError(error) {
	console.warn(error);
	return null;
}

module.exports = {
	getJournal: function(id) {
		return viewJournal(id).catch(handleError);
	},
};