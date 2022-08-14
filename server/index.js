import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";
import cors from "cors";
import multer from "multer";
import path from "path";

const app = express();
const PORT = process.env.PORT || 5000;
let fileName;
let databaseName = "";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    fileName = Date.now() + "_la_ceylon_globals." + path.extname(file.originalname);
    callback(null, fileName);
  },
});

const uploads = multer({ storage });

const db = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
});

db.connect((err) => {
  const database = "CREATE DATABASE IF NOT EXISTS la_ceylon_globals;";
  const use_database = "USE la_ceylon_globals;";
  const createTable = `CREATE TABLE IF NOT EXISTS user(
    userId integer auto_increment unique not null,
    name varchar(200) not null,
    id_brp varchar(200) not null unique,
    postalCode integer not null,
    phoneNumber varchar(20) not null, 
    userName varchar(200) not null unique,
    password varchar(200) not null,
    image varchar(200) not null,
    primary key(userId)
  );`;

  const itemTable = `
  create table if not exists items (
      itemId integer auto_increment unique not null,
      name varchar(200) not null,
      price varchar(200) not null,
      quantityAvailable integer not null,
      coverImage varchar(200) not null,
      primary key(itemId)
  );
  `;
  if (!err) {
    db.query(database, (err, res) => {
      if (err) throw err;
      else {
        db.query(use_database, (err, result) => {
          if (err) throw err;
          else
            db.query(createTable, (err, result) => {
              if (err) throw err;
              else
                db.query(itemTable, (err, result) => {
                  if (err) throw err;
                  else app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
                });
            });
        });
      }
    });
  } else console.log(err);
});

app.post("/register", uploads.single("image"), (req, res) => {
  const data = req.body;
  db.query("INSERT INTO user(name, id_brp, postalCode, phoneNumber, userName, password, image) VALUES(?,?,?,?,?,?,?);", [data.name, data.id, data.postalCode, data.mobile, data.userName, data.password, fileName], (err, result) => {
    if (!err) {
      res.status(201).send({ message: "ok", error: false });
    } else {
      res.status(500).send({ message: err, error: true, response: result });
    }
  });
});

app.get("/login", (req, res) => {
  const userName = req.query.userName;
  const password = req.query.password;

  const query = `SELECT * FROM user WHERE userName=? AND password=?`;
  db.query(query, [userName, password], (err, result) => {
    if (err) res.status(500).send({ message: err.message, error: true });
    else res.status(200).send({ message: result, error: false });
  });
});

app.get("/items", (req, res) => {
  const query = "SELECT * FROM items";
  db.query(query, (err, result) => {
    if (err) res.status(500).send({ message: err.message, error: true });
    else res.status(200).send({ message: result, error: false });
  });
});
