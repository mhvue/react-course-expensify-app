const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname, "..", "public");
const PORT = process.env.PORT || 3000; 

app.use(express.static(publicPath)); //registar middleware(something that runs with each req)

//* to match all unmatch route 
app.get("*", (req,res) => {
    res.sendFile(path.join(publicPath, "index.html"))
}); 

app.listen(PORT, () => {
    console.log("server is up!")
});