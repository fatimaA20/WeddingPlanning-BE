const Buffet = require("../models/Buffet");

exports.buffet_create_get = (req, res) => {
  res.render("buffet/add");
};

exports.buffet_create_post = async (req, res) => {
  try {
    const { restaurantName, type, description, noOfGuests, price } = req.body;
    const { path } = req.file;

    const result = await cloudinary.uploader.upload(path);

    const buffet = new Buffet({
      restaurantName,
      type,
      description,
      noOfGuests,
      price,
      image: result.secure_url,
    });

    await buffet.save();

    res.status(201).json({ buffet });

  } catch (error) {
    res.status(400).send(error);
  }
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
