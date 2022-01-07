var users = require("./handlers/users");
module.exports = function(app) {

    app.get('/hello-world', (request, response) => {
        response.send('Hello world !');
    });

    app.get('/message', (request, response) => {

        if (request.query.message.length > 20) {
            response.end(JSON.stringify({
                "message": "Bad Request",
                "status": 400
            }));
        } else {
            response.send(' hey ' + request.query.message);
        }
    });

    app.post("/infos/headers", (req, res) => {
        res.send(req.headers);
    });

    app.post("/welcome", (req, res) => {
        if (req.body.birthdate.split("/")[2] <= 2004) res.status(200).send({ message: `Welcome:${req.body.firstname}` });
        else res.status(403).send({ message: "Forbidden" });
    });

    app.get('/rick-roll', (request, response) => {
        response.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtu.be');
    });

    app.delete("/custom-header", (req, res) => {
        res.set({
            "content-type": "application/json",
            Message: "Hello World!",
        });
        res.send();
    });

    app.get("/params/:id/:key/:slug", (req, res) => {
        res.send(req.params);
    });


    app.get("/users", users.index);
    app.get("/users/:id", users.getUser);
    app.post("/users", users.createUser);
    app.delete("/users/:id", users.deleteUser);

}