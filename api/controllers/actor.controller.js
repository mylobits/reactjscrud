const db = require("../models");
const Actor = db.Actors;
const Op = db.Sequelize.Op;

// Create and Save a new Actor
exports.create = (req, res) => {
  
  try {
    let Actors = db.actor.create(req.body);
    console.log(Actors);
  } catch (error) {
    console.log(error);
  }
  
  
  //res.json({data: req.toString()});
};

// Retrieve all Actors from the database.
exports.findAll = (req, res) => {
  try {
    db.actor.findAll().then(actor => res.send(actor));  
  } catch (error) {
    res.send({Msg: "No data found"})
  }
  
};

// Find a single Actor with an id
exports.findOne = (req, res) => {
  
};

// Update a Actor by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Actor with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Actors from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Actors
exports.findAllPublished = (req, res) => {
  
};