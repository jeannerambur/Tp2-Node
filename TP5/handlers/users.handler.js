const User = require("../models/user")(sequelize, DataTypes);

exports.createUser = (req, res) => {
    const createUser = User.create(req.body)
        .then((response) => {
            res.send("User Created");
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.updateUser = (req, res) => {
    const updateUser = User.update(req.body, { where: { id: req.params.id } })
        .then((response) => {
            res.send("User Updated");
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.deleteUser = (req, res) => {
    const deleteUser = User.destroy({ id: req.params.id })
        .then((response) => {
            res.send("User deleted");
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.showUser = (req, res) => {
    const query = req.query.show_posts ? { model: Post } : null;
    const showUser = User.findOne({ where: { id: req.params.id } })
        .then((response) => {
            res.send(showUser);
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.showAllUsers = (req, res) => {
    const showAllUsers = User.findAll()
        .then((response) => {
            res.send(showAllUsers);
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};