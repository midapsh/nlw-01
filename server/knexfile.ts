import path from "path";
// Para executar o arquivo faca
// 'npx knex migrate:latest --knexfile knexfile.ts migrate:latest'
module.exports = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "src", "database", "database.sqlite"),
  },
  migrations: {
    directory: path.resolve(__dirname, "src", "database", "migrations"),
  }
};