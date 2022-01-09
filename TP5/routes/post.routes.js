var posts = require("../handlers/posts.handler");

module.exports = function(app) {
    app.post("/posts", posts.createPost);
    app.patch("/posts/:id", posts.updatePost);
    app.delete("/posts/:id", posts.deletePost);
    app.get("/posts/:id", posts.showPost);
    app.get("/posts", posts.showAllPost);
};