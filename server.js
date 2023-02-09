const express = require("express");
const app = express();
const releasenote = require("./routes/releasenote");
const connectDB = require("./db/connect");
const { getAllReleaseNote, createReleaseNote, getReleaseNote, updateReleaseNote, deleteReleaseNote } = require("./controllers/releasenote");
require("dotenv").config();

const port = 3000;

//will delete
const connectString = "mongodb+srv://nyka:1234@projectone.foglf.mongodb.net/?retryWrites=true&w=majority"

//middleware
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("hello everyone, how are you...");
});

app.use("/api/v1/releasenote", getAllReleaseNote);
app.use("/api/v1/getreleasenote", getReleaseNote) //get all the release node
app.use("/api/v1/createreleasenote", createReleaseNote) // create new release note
app.use("/api/v1/updatereleasenote", updateReleaseNote) 
app.use("/api/v1/deletereleasenote", deleteReleaseNote) 

const start = async () => {
  try {
    await connectDB(connectString); //will change connection string with process.env.MONGO_URI
    app.listen(port, console.log("Server is listening on port 3000"));
  } catch (error) {
    console.log(error);
  }
};

start();
