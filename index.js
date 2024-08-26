const express = require("express");
const urlRouter = require("./routes/url");
const URL = require("./models/url");
const {connectMongoDB} =require("./connectDB");
const app = express();


const PORT = 8001;

connectMongoDB('mongodb://localhost:27017/short-url')
.then(()=>console.log('MongoDB connection established'));

app.use(express.json());
app.use("/", urlRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

