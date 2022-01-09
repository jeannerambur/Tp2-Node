const express = require("express");
const app = express();

app.use(express.json());

require("./routes/routes")(app);
require("./routes/user.routes")(app);
require("./routes/comment.routes")(app);
require("./routes/post.routes")(app);
require("./routes/role.routes")(app);

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(3000, () => console.log("Le serveur tourne sur http://localhost:3000"))