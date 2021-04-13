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
			<p>hi</p>
			<p> onChange={this.handleHomepage.bind(this)} </p>
		)
	}
}

export default Homepage;