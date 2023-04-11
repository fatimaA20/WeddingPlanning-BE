const Studio = require("../models/Studio");
const moment= require('moment')

exports.Studio_create_get = (req, res) => {
  res.render("Studio/add");
};

exports.Studio_create_post = (req, res) => {
  console.log(req.body);
  let studio = new Studio(req.body);

  // Save Studio
  studio
    .save()
    .then((Studios) => {
      // res.redirect("/Studio/index");
      res.json({ Studios });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later");
    });
};

// HTTP GET - Studio Index
exports.Studio_index_get = (req, res) => {
  Studio.find()
    .then((Studios) => {
      res.json({ Studios: Studios });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP GET - Studio by ID
exports.Studio_show_get = (req, res) => {
  console.log(req.query.id);
  Studio.findById(req.query.id)
    .then((Studio) => {
      res.render("Studio/detail", { Studio ,moment});
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP GET - Load Studio Edit Form
exports.Studio_edit_get = (req, res) => {
  Studio.findById(req.query.id)
    .then((Studio) => {
      res.json({Studio});
    })
    .catch(err => {
      console.log(err);
    })
};

// HTTP PUT - Studio Update
exports.Studio_update_put = (req, res) => {
  console.log(req.body._id);
  Studio.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then((Studio) => {
      // res.redirect("/Studio/index");
      res.json({ Studio });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP DELETE - Studio
exports.Studio_delete_get = (req, res) => {
  console.log(req.query.id);
  Studio.findByIdAndDelete(req.query.id)
    .then((Studio) => {
      // res.redirect("/Studio/index");
      res.json({ Studio });
    })
    .catch((err) => {
      console.log(err);
    });
};