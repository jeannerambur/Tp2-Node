const Role = require("../models/role");

exports.createRole = (req, res) => {
    const createRole = Role.create(req.body)
        .then((response) => {
            res.send("Role Created");
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.updateRole = (req, res) => {
    const updateRole = Role.update(req.body, { where: { id: req.params.id } })
        .then((response) => {
            res.send("Role Updated");
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.deleteRole = (req, res) => {
    const deleteRole = Role.destroy({ id: req.params.id })
        .then((response) => {
            res.send("Role deleted");
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.showRole = (req, res) => {
    const showRole = Role.findOne({ where: { id: req.params.id } })
        .then((response) => {
            res.send(showRole);
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.showAllRoles = (req, res) => {
    const showAllRoles = Role.findAll()
        .then((response) => {
            res.send(showAllRoles);
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};