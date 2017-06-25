// Start Express server
const express = require('express');
const app = express();

const Neo4J = require('./db/neo4j');

function getCities() {
  return new Promise((resolve, reject) => {
    Neo4J
    .run('MATCH (n:City) RETURN n as city')
    .then((result) => {
      return result.records.map((record) => {
        // Return Promise for City Nodes
        return record.get('city').properties;
      });
    })
    .then((cities) => {
      // Resolve Array of City Node objects
      resolve(cities);
    })
    .catch ((error) => {
      throw new Error(error);
    });
  });
}

// Index Route
app.get('/', (req, res) => {
  // Get Cities
  getCities()
    .then((arrayofCities) => {
      // Send Response object of Cities
      res.send(arrayofCities);
    })
    .catch ((error) => {
      throw new Error(error);
    });
});

// Start server
app.listen(1337, () => {
  console.log('Neo4j-spatial app listening on port 1337!');
})
