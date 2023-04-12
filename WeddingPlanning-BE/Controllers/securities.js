const Security = require("../models/Security");
const moment= require('moment');

exports.security_create_get = (req, res) => {
  res.render("security/add");
};

exports.security_create_post = (req, res) => {
  console.log(req.body);
  let security = new Security(req.body);

  // Save Security
  security
    .save()
    .then((security) => {
      // res.redirect("/security/index");
      res.json({ security });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later");
    });
};

// HTTP GET - Security Index
exports.security_index_get = (req, res) => {
  Security.find()
    .then((securities) => {
      res.json({ securities:securities });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP GET - Security by ID
exports.security_show_get = (req, res) => {
  console.log(req.query.id);
  Security.findById(req.query.id)
    .then((security) => {
      res.json( security );
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP GET - Load Security Edit Form
exports.security_edit_get = (req, res) => {
  Security.findById(req.query.id)
    .then((security) => {
      res.json({ security });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP PUT - Security Update
exports.security_update_put = (req, res) => {
  console.log(req.body._id);
  Security.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then((security) => {
      // res.redirect("/security/index");
      res.json({ security });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP DELETE - Security
exports.security_delete_get = (req, res) => {
  console.log(req.query.id);
  Security.findByIdAndDelete(req.query.id)
    .then((security) => {
      // res.redirect("/security/index");
      res.json({ security });
    })
    .catch((err) => {
      console.log(err);
    });
};
