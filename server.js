const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const homeRoutes = require("./controllers/homeroutes.js");

const app = express();
const PORT = process.env.PORT || 3331;

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(homeRoutes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening `));
});
