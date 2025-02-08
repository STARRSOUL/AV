import  Express  from "express";
const app = Express();
const PORT = 3000;
app.set("view engine", "ejs");
app.use(Express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/proposal", (req, res) => {
    res.render("proposal");
});

app.listen(PORT, () => 
console.log(`Server running on http://localhost:${PORT}`));
