// adding basic node file
const express = require("express");
const cors = require("cors");
// const app = express();

const bodyParser = require("body-parser");
// var dateFormat = require('dateformat');

const app = express();
app.set("port", 3001);

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const Pool = require("pg").Pool;
const config = {
	host: "localhost",
	user: "Austin", // add user when we have database
	password: "astros5",
	database: "journals"
};

const pool = new Pool(config);

app.get("/", (req,res) => {
	res.json({ message: "success"});
});

// add things here
// ...

app.get("/retrieve", async (req,res) => {
	try {
		const response = await pool.query('SELECT * FROM users');
		res.json({temp: response.rows});
	} catch (err) {
		console.log(err);
	}
})



app.delete("/delete", cors(), async (req,res) => {
	const username = req.query.username;
	
	try {
		const template = "DELETE FROM users WHERE username=$1"; // add table
		const response = await pool.query(template,[username]);
		res.json({status: "deleted"});

	} catch (err) {
		console.log(err);
	}
});

app.listen(app.get("port"), () => {
	console.log('Server at: http://localhost:${app.get("port")}/');
});