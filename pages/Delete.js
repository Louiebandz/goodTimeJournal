import React from 'react';
import { deletePerson } from "../lib/utilDelete.js";

function Delete() {
	const [name, setName] = React.useState("");

	function handleUpdate(evt) {
    	setName(evt.target.value);
    }

    async function handleDelete(evt) {
    	await deletePerson(name);
    	alert("Deleted!");
    }

    return <div>
    	<p>Enter a username:</p>
        <p><input type='text' value={name} onChange={handleUpdate} /></p>
    	<button className='button-style' onClick={handleDelete}>Delete Account</button>
    </div>
}

export default Delete;

