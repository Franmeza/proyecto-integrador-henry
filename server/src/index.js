const express = require("express");
const mainRouter = require("./routes/index");
const server = express();
const app = require("./app");
const { conn } = require("./DB_connection");
const PORT = 3001;

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
  .sync({ force: false }) //"force:true" => cada vez q se sincronice , borre toda la base de datos y crea las tablas en base a los modelos
  .then(() => {
    server.listen("3001", () => {
      console.log("Server raised in port: ", 3001);
    });
  })
  .catch((err) => console.log(err));
