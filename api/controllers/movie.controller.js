const db = require("../models");
const Movie = db.movie;
const Actor = db.actor;
const Op = db.Sequelize.Op;

// Create and Save a new Movie
exports.create = (req, res) => {

  db.movie.create(req.body).then(() => {
    res.status(201).json({
      "msg": "Movie created"
    }).end();

  }).catch(error => {
    res.status(500).json({
      "Msg": {
        "value": error.errors[0].value,
        "type": error.errors[0].validatorKey
      }
    }).end();
  });



  //res.json({data: req.toString()});
};

// Retrieve all Movies from the database.
exports.findAll = (req, res) => {
  //console.log(req.body);
  let relations = db.movie.findAll({limit: 1}).then(res=>{
    //console.log(res);
    

  });
  
  
  db.movie.findAndCountAll().then(    
    movie => res.send({
      data: movie.rows,
      totalCount: movie.count,
      page: 1,
      realtions: relations
    })
  );
};

// Find a single Movie with an id
exports.findOne = (req, res) => {

};

// Update a Movie by the id in the request
exports.update = (req, res) => {

  const request_data = req.body.data;
  // const request_value = req.body.newValue;
  let updateValues = request_data;


  db.movie.update(updateValues, {
    where: {
      id: req.params.id
    }
  }).then(result=> {
    // here your result is simply an array with number of affected rows
    //console.log(result);
    res.status(202).json({
      "msg": "Movie updated successfully"
    }).end();
  }).catch(error => {
    res.status(500).json({
      "Msg": {
        "value": error.errors[0].value,
        "type": error.errors[0].validatorKey
      }
    }).end();
  });
};

// Delete a Movie with the specified id in the request
exports.delete = (req, res) => {
  const request_data = req.body.data;
  let id = req.params.id;
  db.movie.destroy({
    where: {
      id
    }
  }).then(result=>{
    res.status(200).json({
      "msg": "Movie deleted successfully"
    }).end();
  });
  //console.log(id);

};

// Delete all Movies from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Movies
exports.findAllPublished = (req, res) => {
  db.movie.findAll().then(movie => res.send(movie));
};