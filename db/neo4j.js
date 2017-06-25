// Load databases
var neo4j = require('neo4j-driver').v1;

// Connect database
const db = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "PASSWORDCHANGEME"), {
  encrypted: false
}).session();

module.exports = db;
