var roles = require("../handlers/roles.handler");

module.exports = function(app) {
    app.post("/roles", roles.createRole);
    app.patch("/roles/:id", roles.updateRole);
    app.delete("/roles/:id", roles.deleteRole);
    app.get("/roles/:id", roles.showRole);
    app.get("/roles", roles.showAllRoles);
};