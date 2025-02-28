const { Client } = require("pg");

const client = new Client({
  user: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_DATABASE || "postgres",
  password: process.env.DB_PASSWORD || "root",
  port: process.env.DB_PORT || 5432,
});

client
  .connect()
  .then(() => console.log("Connexion à la base de données réussie"))
  .catch((err) =>
    console.error("Erreur de connexion à la base de données", err)
  );

module.exports = client;
