module.exports = app => {
    const actors = require("../controllers/actor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new actor
    router.post("/", actors.create);
  
    // Retrieve all actors
    router.get("/", actors.findAll);
  
    // Retrieve all published actors
    router.get("/published", actors.findAllPublished);
  
    // Retrieve a single actor with id
    router.get("/:id", actors.findOne);
  
    // Update a actor with id
    router.put("/:id", actors.update);
  
    // Delete a actor with id
    router.delete("/:id", actors.delete);
  
    // Create a new actor
    router.delete("/", actors.deleteAll);
  
    app.use('/api/actors', router);
  };