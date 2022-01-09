const Post = require("../models/post");

exports.createPost = (req, res) => {
    const createPost = Post.create(req.body)
        .then((response) => {
            res.send("Post Created");
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.updatePost = (req, res) => {
    const updatePost = Post.update(req.body, { where: { id: req.params.id } })
        .then((response) => {
            res.send("Post Updated");
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.deletePost = (req, res) => {
    const deletePost = Post.destroy({ id: req.params.id })
        .then((response) => {
            res.send("Post deleted");
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.showPost = (req, res) => {
    const query = req.query.show_comments ? { model: Comment } : null;
    const showPost = Post.findOne({ where: { id: req.params.id } })
        .then((response) => {
            res.send(showPost);
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};

exports.showAllPost = (req, res) => {
    const showAllPost = Post.findAll()
        .then((response) => {
            res.send(showAllPost);
        })
        .catch((err) => {
            res.status(400).send({ message: "Bad request" });
        });
};