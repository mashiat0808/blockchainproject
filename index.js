// index.js

/**
 * Required External Modules
 */

 const express = require("express");
 var path = require("path");
 const router = express.Router();
 var bodyParser = require('body-parser');




/**
 * App Variables
 */

 const app = express();
 const port = process.env.PORT || "8000";

//  var mongoose = require('mongoose');
//  var Schema = mongoose.Schema;

// const productSchema = new Schema(
//   {
//     to: {type: String, required: true},
//     from: {type: String, required: true},
//     date: {type: Date, required: true},
//     amount: {type: Number, required: true},
//     signature: {type: String, required: true}
//   }
// );

// var productPost = mongoose.model('productPost', productSchema);
// module.exports = productPost;




/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.render("index", {title: "Home"});
  });

app.get("/productPage", (req, res) => {
    res.render("productPage", {title: "Product Page"});
  });
app.get("/validator", (req, res) => {
    res.render("validator", {title: "Validator Login"});
  });

  app.get("/validatorpage", (req, res) => {
    res.render("validatorpage", {title: "Validator"});
  });






const productPost = require('./models/productPost');

app.post('/prodPost', (req, res) => {
  var prodPost = new productPost(req.body);

  console.log(res.body);
  console.log(req.body);
  prodPost.save(function(err, user){
      if (err) {
          console.log(err);
      }
      return res.send("Product is on validation queue.");
  });
});


/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
    });