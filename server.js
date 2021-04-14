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

app.get("/getEntry", async (req, res) => {
  const id = req.query.u_id;

  try {
    const temp = "SELECT * FROM journalentries WHERE u_id=$1";
    const resp = await pool.query(temp, [id]);

    res.json({ status: resp.rows });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete", cors(), async (req,res) => {
	const username = req.query.username;
	
	try {
		const temp = "DELETE FROM journalentries WHERE journalID IN (SELECT u_id FROM journals WHERE u_id IN(SELECT id FROM users WHERE username=$1))";
		const resp = await pool.query(temp, [username]);

		const temp1 = "DELETE FROM journals WHERE u_id IN (SELECT id FROM users WHERE username=$1)";
		const resp1 = await pool.query(temp1, [username]);

		const temp2 = "DELETE FROM users WHERE username=$1";
		const resp2 = await pool.query(temp2, [username]);

		res.json({ status: "DELETED" });

	} catch (err) {
		console.log(err);
	}
});

app.get("/viewJournal", async (req,res) => {
	const id = req.query.id;

	try {

		const temp = 'SELECT * FROM journalentries WHERE journalID IN (SELECT u_id FROM journals WHERE u_id=$1)';
		const resp = await pool.query(temp, [id]);

		res.json({ success: resp.rows });

	} catch (err) {
		console.log(err);
	}


});

app.listen(app.get("port"), () => {
	console.log(`Server at: http://localhost:${app.get("port")}`);
});
