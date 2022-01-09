const Comment = require("../models/comment");

exports.createComment = (req, res) => {
    const createComment = Comment.create(req.body)
        .then((response) => {
            res.send("Comment Created");
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.updateComment = (req, res) => {
    const updateComment = Comment.update(req.body, { where: { id: req.params.id } })
        .then((response) => {
            res.send("Comment Updated");
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.deleteComment = (req, res) => {
    const deleteComment = Comment.destroy({ id: req.params.id })
        .then((response) => {
            res.send("Comment deleted");
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.showComment = (req, res) => {
    const showComment = Comment.findOne({ where: { id: req.params.id } })
        .then((response) => {
            res.send(showComment);
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.showAllComment = (req, res) => {
    const showAllComment = Comment.findAll()
        .then((response) => {
            res.send(showAllComment);
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};