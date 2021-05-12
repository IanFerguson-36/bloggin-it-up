const Blogpost = require("./Blogpost");
const User = require("./User");
const Comment = require("./Comment");

User.hasMany(Blogpost, {
  foreignKey: "user_id",
  onDelete: "Cascade",
});

Blogpost.hasMany(Comment, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

module.exports = { User, Blogpost, Comment };
