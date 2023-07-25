//dependencies
const express = require("express");
const PORT = 3000;
const app = express();
const db=require('./db');

//Establish connection with databas
db()

//CORS (Cross-Origin Resource Sharing) enables servers to control 
//and specify which cross-origin requests are allowed by the browser.
const cors = require("cors");
app.use(cors())

//Middleware
app.use(express.json());
const songRouter=require('./routes/songsRoutes')

app.use('/', songRouter);


app.listen(PORT, async () => {
  console.log(`Server Listening on ${PORT}`);
});
