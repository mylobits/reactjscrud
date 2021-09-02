module.exports = (sequelize, Sequelize) => {
    const Actor = sequelize.define("actor", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      actorName: {
        type: Sequelize.STRING,
        unique:true
        
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
  
    return Actor;
  };