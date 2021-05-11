const blogPosts = require("./blogposts");
const user = require("./user");
const comments = require("./comments");

user.hasMany(blogPosts, {
  foreignKey: "user_id",
  onDelete: "Cascade",
});

blogPosts.hasMany(comments, {
  foreignKey: "post_id",
});

user.hasMany(comments, {
  foreignKey: "user_id",
});

module.exports = { User, blogPosts, comments };
