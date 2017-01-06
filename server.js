const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.end("Welcome to EXPRESS!");
});

// let contactsDatabase = {
//
// }

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get("/contacts", (req, res) => {
  let templateVars = { contacts: contactsDatabase };
  res.render("contacts_index", templateVars);
});
