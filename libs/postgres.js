const {Client} = require('pg');


async function getConneccion() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'master',
    database:'my_db'
  });

  await client.connect();
  return client;

}

module.exports = getConneccion;
