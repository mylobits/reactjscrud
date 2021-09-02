

module.exports = (sequelize, Sequelize) => {
    
    const Actor = require('./actor.model')(sequelize, Sequelize);
    
    const Movie = sequelize.define("movie", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      movieName: {
        type: Sequelize.STRING,
        unique:true
      },
      actor: {
        type: Sequelize.STRING
      },
      date:{
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.BIGINT
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });

    
    Movie.hasMany(Actor,{
      foreignKey: 'actor'
    });
    Actor.belongsTo(Movie);
  
    return Movie;
  };