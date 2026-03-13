const express = require("express");
const app = express();
const PORT = 3000;
app.get('/',(req, res) => {
    res.send("Hello from Node App");
});

app.listen(PORT,() => {
    console.log(`server is successfully running on ${PORT}`)
})