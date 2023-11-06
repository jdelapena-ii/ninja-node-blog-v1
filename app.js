const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const blogRoutes = require("./routes/blogRoutes");

// express app
const app = express();

// connect to mongodb
const dbURI =
  "mongodb+srv://jedo_user:test123@nodetuts.0pasdbs.mongodb.net/node-netninja?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((result) => app.listen(8080))
  .catch((error) => console.log(error));

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// // mongoose & mongo tests
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new blog",
//     snippet: "about my new blog",
//     body: "more about my new blog",
//   });

//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("5ea99b49b8531f40c0fde689")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use("/blogs", blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
