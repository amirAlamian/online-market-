const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path")
let x;
let proFind=[];
router.use(express.static("public"));
router.use(bodyParser.urlencoded({ extended: false }));

router.post("/image", function (req, res) {
    res.send("received");
})
router.post("/search", function (req, res) {
    proFind=[]
    fs.readFile(path.join(__dirname, "../product.json"), "utf8", function (err, file) {
        file = JSON.parse(file);
        for (let i = 0; i < file.length; i++) {
            if (req.body.name === file[i].name) {
                proFind.push(file[i]);
            }
            else {
                x = file[i].name.split(" ");
                for (let j = 0; j < x.length; j++) {
                    if (req.body.name === x[j]) {
                        proFind.push(file[i]);
                    }
                }
            }

            if(i===file.length-1){
                res.send(proFind)
            }
        }
    })
})
router.get("/:proTitle", function (req, res) {
    fs.readFile(path.join(__dirname, "../product.json"), "utf8", function (err, file) {
        file = JSON.parse(file);
        for (let i = 0; i < file.length; i++) {
            if (file[i].params === req.params.proTitle) {
                res.render("pages/products", { info: file[i] })
            }
        }

        if (err) {
            console.log(err);

        }
    })

})
module.exports = router;