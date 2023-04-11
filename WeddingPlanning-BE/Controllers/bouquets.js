const Bouquet = require("../models/Bouquet");
const moment= require('moment')

exports.Bouquet_create_get = (req, res) => {
  res.render("Bouquet/add");
};

exports.Bouquet_create_post = (req, res) => {
  console.log(req.body);
  let bouquet = new Bouquet(req.body);

  // Save Bouquet
  bouquet
    .save()
    .then((bouquets) => {
      // res.redirect("/Bouquet/index");
      res.json({ bouquets });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later");
    });
};

// HTTP GET - Bouquet Index
exports.Bouquet_index_get = (req, res) => {
  Bouquet.find()
    .then((bouquets) => {
      res.json({ bouquets: bouquets });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP GET - Bouquet by ID
exports.Bouquet_show_get = (req, res) => {
  console.log(req.query.id);
  Bouquet.findById(req.query.id)
    .then((Bouquet) => {
      res.render("Bouquet/detail", { Bouquet ,moment});
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP GET - Load Bouquet Edit Form
exports.Bouquet_edit_get = (req, res) => {
  Bouquet.findById(req.query.id)
    .then((Bouquet) => {
      res.json({Bouquet});
    })
    .catch(err => {
      console.log(err);
    })
};

// HTTP PUT - Bouquet Update
exports.Bouquet_update_put = (req, res) => {
  console.log(req.body._id);
  Bouquet.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then((Bouquet) => {
      // res.redirect("/Bouquet/index");
      res.json({ Bouquet });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP DELETE - Bouquet
exports.Bouquet_delete_get = (req, res) => {
  console.log(req.query.id);
  Bouquet.findByIdAndDelete(req.query.id)
    .then((Bouquet) => {
      // res.redirect("/Bouquet/index");
      res.json({ Bouquet });
    })
    .catch((err) => {
      console.log(err);
    });
};