const DJ = require("../models/DJ");
const moment= require('moment')

exports.DJ_create_get = (req, res) => {
  res.render("DJ/add");
};

exports.DJ_create_post = (req, res) => {
  console.log(req.body);
  let dj = new DJ(req.body);

  // Save DJ
  dj
    .save()
    .then((djs) => {
      // res.redirect("/DJ/index");
      res.json({ djs });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later");
    });
};

// HTTP GET - DJ Index
exports.DJ_index_get = (req, res) => {
  DJ.find()
    .then((djs) => {
      res.json({ djs: djs });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP GET - DJ by ID
exports.DJ_show_get = (req, res) => {
  console.log(req.query.id);
  DJ.findById(req.query.id)
    .then((dj) => {
      res.json({dj})
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP GET - Load DJ Edit Form
exports.DJ_edit_get = (req, res) => {
  DJ.findById(req.query.id)
    .then((dj) => {
      res.json({dj});
    })
    .catch(err => {
      console.log(err);
    })
};

// HTTP PUT - DJ Update
exports.DJ_update_put = (req, res) => {
  console.log(req.body._id);
  DJ.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then((dj) => {
      // res.redirect("/dj/index");
      res.json({ dj });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP DELETE - DJ
exports.DJ_delete_get = (req, res) => {
  console.log(req.query.id);
  DJ.findByIdAndDelete(req.query.id)
    .then((dj) => {
      // res.redirect("/dj/index");
      res.json({ dj });
    })
    .catch((err) => {
      console.log(err);
    });
};