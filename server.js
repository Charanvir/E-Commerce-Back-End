const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// when force is set to true, it will restart the database and will need to be put back to false, to seed in data and retain
// any CRUD changes made using the established endpoints
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on Port ${PORT}`)
    })
})