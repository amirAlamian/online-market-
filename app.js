const express = require("express");
const app = express();
const home = require("./routers/home");
const products = require("./routers/products");

app.set("view engine", "ejs");



app.use(express.static("public"));

app.use("/products", products);

app.use("/home", home);





app.get("/about", function (req, res) {
    res.render("pages/about")
})

app.get("/contact", function (req, res) {
    res.render("pages/contact")
})

app.listen(8080, function () {
    console.log("server is started at port 8080");

});
