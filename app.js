var express = require("express"),
    app     = express();

var http = require("http");


app.set("view engine", "ejs");

app.use("/assets", express.static("assets"));

app.use("/css", express.static("css"));
app.use("/images", express.static("images"));
app.use("/js", express.static("js"));
app.use("/php", express.static("php"));
app.use("/webfonts", express.static("webfonts"));
app.use("/logo", express.static("logo"));

app.get("/", function(req, res){
    res.render("body");
})


setInterval(function() {
    http.get("http://iti-project-v5.herokuapp.com");
}, 300000); // every 5 minutes (300000)


// app.listen(3300, function(req, res){
//     console.log("listen to port 3300");
// });

app.listen(process.env.PORT, process.env.IP);
