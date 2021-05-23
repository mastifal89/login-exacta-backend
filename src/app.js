import express from "express";
import config from "./config.js";
import router from "./router.js";
import "./database";
const app = express();

// Config
config(app);

// Router
router(app);

app.listen(3001, () =>
  console.log("El servidor ha sido inicializado: http://localhost:6000")
);
