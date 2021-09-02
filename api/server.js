require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors");




var corsOptions = {
  origin: "http://localhost:3000"
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


const db = require("./models");
// db.sequelize.sync();
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

require("./routes/movie.routes")(app);
require("./routes/actor.routes")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Movies application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

