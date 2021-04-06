import React from "react";
import { getInfo } from "../lib/getPosts.js";
// import the id


class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { accountId: 3 }
	}
	// need to call
	async handleHomepage() {
		const user = await getInfo(this.state.accountId);
		console.log(user);
		this.setState({ user });
	}

	render() {
		return (

		)
	}
}

export default Homepage;