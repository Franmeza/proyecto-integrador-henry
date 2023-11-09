const express = require("express");
const mainRouter = require("./routes/index");
const server = express();
const app = require("./app");
const { conn } = require("./DB_connection");
const PORT = process.env.PORT;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());

server.use("/rickandmorty", mainRouter);

conn
  .sync({ force: true }) //"force:true" => cada vez q se sincronice , borre toda la base de datos y crea las tablas en base a los modelos
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server raised in port:, ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
