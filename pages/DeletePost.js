import React from 'react';
import { deleteId } from "../lib/utilDeletePost.js";
function DeleteUser() {
	const [id, setId] = React.useState("");

	function handleUpdate(evt) {
		setId(evt.target.value);
	}

	async function handleDelete(evt) {
		console.log(id);
		await deleteId(id);
		alert("Deleted!");
	}


	return <div>
		<h4>Enter post id to delete:</h4>
		<p><input type='text' value={id} onChange={handleUpdate} /></p>
		<button className='button-style' onClick={handleDelete}>Delete Post</button>
	</div>
}

export default DeleteUser;