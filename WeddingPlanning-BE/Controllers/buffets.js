const Buffet = require("../models/Buffet");

exports.buffet_create_get = (req, res) => {
  res.render("buffet/add");
};

exports.buffet_create_post = (req, res) => {
  console.log(req.body);
  let buffet = new Buffet(req.body);

  // Save Buffet
  buffet
    .save()
    .then((buffet) => {
      // res.redirect("/buffet/index");
      res.json({ buffet });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later");
    });
};

// HTTP GET - Buffet Index
exports.buffet_index_get = (req, res) => {
  Buffet.find()
    .then((buffets) => {
      res.json({ buffets: buffets });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP GET - Buffet by ID
exports.buffet_show_get = (req, res) => {
  console.log(req.query.id);
  Buffet.findById(req.query.id)
    .then((buffet) => {
      res.json(buffet);
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP GET - Load Buffet Edit Form
exports.buffet_edit_get = (req, res) => {
  Buffet.findById(req.query.id)
    .then((buffet) => {
      res.json({ buffet });
    })
    .catch(err => {
      console.log(err);
    })
};

// HTTP PUT - Buffet Update
exports.buffet_update_put = (req, res) => {
  console.log(req.body._id);
  Buffet.findByIdAndUpdate(req.body._id, req.body, { new: true })
    .then((buffet) => {
      // res.redirect("/buffet/index");
      res.json({ buffet });
    })
    .catch((err) => {
      console.log(err);
    });
};

// HTTP DELETE - Buffet
exports.buffet_delete_get = (req, res) => {
  console.log(req.query.id);
  Buffet.findByIdAndDelete(req.query.id)
    .then((buffet) => {
      // res.redirect("/buffet/index");
      res.json({ buffet });
    })
    .catch((err) => {
      console.log(err);
    });
};
