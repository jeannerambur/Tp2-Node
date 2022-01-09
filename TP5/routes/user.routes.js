var users = require("../handlers/users.handler");

module.exports = function(app) {
    app.post("/users", users.createUser);
    app.patch("/users/:id", users.updateUser);
    app.delete("/users/:id", users.deleteUser);
    app.get("/users/:id", users.showUser);
    app.get("/users", users.showAllUsers);
};