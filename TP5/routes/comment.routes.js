var comments = require("../handlers/comments.handler");

module.exports = function(app) {
    app.post("/comments", comments.createComment);
    app.patch("/comments/:id", comments.updateComment);
    app.delete("/comments/:id", comments.deleteComment);
    app.get("/comments/:id", comments.showComment);
    app.get("/comments", comments.showAllComment);
};