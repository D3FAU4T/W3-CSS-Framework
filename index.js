const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("Public"));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "." });
});

app.post("/register", (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

app.listen(3000, () => console.log(`Live server initialised on port 3000`));