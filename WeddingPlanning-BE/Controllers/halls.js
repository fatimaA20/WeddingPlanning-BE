const Hall = require('../models/Hall');
const moment = require('moment');

// HTTP GET - Hall Index
exports.hall_index_get = (req, res) => {
  Hall.find()
    .then((halls) => {
      res.json({ halls });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later");
    });
};

// HTTP GET - Hall by ID
exports.hall_show_get = (req, res) => {
  console.log(req.query.id);
  Hall.findById(req.query.id)
    .then((hall) => {
      res.render("hall/detail", { hall, moment });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later");
    });
};

// HTTP GET - Load Hall Edit Form
exports.hall_edit_get = (req, res) => {
  Hall.findById(req.query.id)
    .then((hall) => {
      res.json({ hall });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later");
    });
};

// HTTP PUT - Hall Update
exports.hall_update_put = (req, res) => {
  console.log(req.body._id);
  Hall.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then((hall) => {
      res.json({ hall });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later");
    });
};

// HTTP DELETE - Hall
exports.hall_delete_get = (req, res) => {
  console.log(req.query.id);
  Hall.findByIdAndDelete(req.query.id)
    .then((hall) => {
      res.json({ hall });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later");
    });
};

// HTTP GET - Add Hall Form
exports.hall_create_get = (req, res) => {
  res.render("hall/add");
};

// HTTP POST - Add Hall
exports.hall_create_post = (req, res) => {
  console.log(req.body);
  let hall = new Hall(req.body);

  // Save Hall
  hall
    .save()
    .then((hall) => {
      res.json({ hall });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later");
    });
};
