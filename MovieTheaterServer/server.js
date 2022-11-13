const express = require("express");
const app = express();
const port = 5001;

app.get("/allUsers/", (req, res) => {
  res.send("Hello World3");
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  console.log("get user " + id);

  res.send("Hello World3");
});

app.listen(port, () => {
  console.log("App listening on port" + port);
});

//npx nodemon [server.js]
