const express = require("express");
const path = require("path");
const app = express();

// Configuración de EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get("/", (req, res) => res.render("index"));
app.get("/tateti", (req, res) => res.render("tateti"));
app.get("/ppt", (req, res) => res.render("ppt"));
app.get("/simon", (req, res) => res.render("simon"));


// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
