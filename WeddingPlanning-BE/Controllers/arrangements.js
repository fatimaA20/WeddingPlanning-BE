const Arrangement = require("../models/Arrangement");
const moment= require('moment')

exports.Arrangement_create_get = (req, res) => {
  res.render("Arrangement/add");
};

exports.Arrangement_create_post = (req, res) => {
  console.log(req.body);
  let arrangement = new Arrangement(req.body);

  // Save Arrangement
  arrangement
    .save()
    .then((Arrangements) => {
      // res.redirect("/Arrangement/index");
      res.json({ Arrangements });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later");
    });
};

// HTTP GET - Arrangement Index
exports.Arrangement_index_get = (req, res) => {
  Arrangement.find()
    .then((Arrangements) => {
      res.json({ Arrangements: Arrangements });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP GET - Arrangement by ID
exports.Arrangement_show_get = (req, res) => {
  console.log(req.query.id);
  Arrangement.findById(req.query.id)
    .then((Arrangement) => {
      res.json(Arrangement);
    })


    .catch((err) => {
      console.log(err);
    });
};

// HTTP GET - Load Arrangement Edit Form
exports.Arrangement_edit_get = (req, res) => {
  Arrangement.findById(req.query.id)
    .then((Arrangement) => {
      res.json({Arrangement});
    })
    .catch(err => {
      console.log(err);
    })
};

// HTTP PUT - Arrangement Update
exports.Arrangement_update_put = (req, res) => {
  console.log(req.body._id);
  Arrangement.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then((Arrangement) => {
      // res.redirect("/Arrangement/index");
      res.json({ Arrangement });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP DELETE - Arrangement
exports.Arrangement_delete_get = (req, res) => {
  console.log(req.query.id);
  Arrangement.findByIdAndDelete(req.query.id)
    .then((Arrangement) => {
      // res.redirect("/Arrangement/index");
      res.json({ Arrangement });
    })
    .catch((err) => {
      console.log(err);
    });
};