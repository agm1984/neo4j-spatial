// Load databases
var neo4j = require('neo4j-driver').v1;

// Connect database
const db = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "d1c4b9f0f6d88eddfdc028d97105d8fa6eddf322db5fa628c1c08c5b8c7e8b03"), {
  encrypted: false
}).session();

module.exports = db;
