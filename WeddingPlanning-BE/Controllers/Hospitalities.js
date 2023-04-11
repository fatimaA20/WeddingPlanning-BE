const Hospitality = require('../models/Hospitality');
const moment = require('moment');

// HTTP GET - Load add hospitality form
exports.hospitality_create_get = (req, res) => {
  res.render('hospitality/add');
};

// HTTP POST - Create hospitality
exports.hospitality_create_post = (req, res) => {
  const { name, type, description, price, image } = req.body;
  const hospitality = new Hospitality({ name, type, description, price, image });
  hospitality
    .save()
    .then((result) => {
      res.status(201).json({ message: 'Hospitality created successfully', hospitality: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// HTTP GET - List all hospitality
exports.hospitality_index_get = (req, res) => {
  Hospitality.find()
    .then((result) => {
      res.status(200).json({ hospitality: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// HTTP GET - Load hospitality details
exports.hospitality_show_get = (req, res) => {
  const { id } = req.query;
  Hospitality.findById(id)
    .then((result) => {
      res.status(200).json({ hospitality: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// HTTP GET - Load edit hospitality form
exports.hospitality_edit_get = (req, res) => {
  const { id } = req.query;
  Hospitality.findById(id)
    .then((result) => {
      res.status(200).json({ hospitality: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// HTTP PUT - Update hospitality
exports.hospitality_update_put = (req, res) => {
  const { id, name, type, description, price, image } = req.body;
  Hospitality.findByIdAndUpdate(id, { name, type, description, price, image }, { new: true })
    .then((result) => {
      res.status(200).json({ message: 'Hospitality updated successfully', hospitality: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

// HTTP DELETE - Delete hospitality
exports.hospitality_delete_get = (req, res) => {
  const { id } = req.query;
  Hospitality.findByIdAndDelete(id)
    .then((result) => {
      res.status(200).json({ message: 'Hospitality deleted successfully', hospitality: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
