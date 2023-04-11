const Buffet = require("../models/Buffet");

exports.buffet_create_get = (req, res) => {
  res.render("buffet/add");
};

// / POST request to create a new Buffet record
exports.buffet_create_post = (req, res) => {
  const { restaurantName, type, description, noOfGuests, price, image } = req.body;
  const buffet = new Buffet({ restaurantName, type, description, noOfGuests, price, image });
  buffet
    .save()
    .then((result) => {
      res.status(201).json({ message: 'Buffet created successfully', buffet: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};


// exports.buffet_create_post = async (req, res, next) => {
//   try {
//     // create a new Buffet object with the data from the request body
//     const newBuffet = new Buffet({
//       restaurantName: req.body.restaurantName,
//       type: req.body.type,
//       description: req.body.description,
//       noOfGuests: req.body.noOfGuests,
//       price: req.body.price
//     });

//     // if an image is included in the request, upload it to Cloudinary and add the URL to the new Buffet object
//     if (req.file) {
//       const result = await cloudinary.uploader.upload(req.file.path);
//       newBuffet.image = result.secure_url;
//     }

//     // save the new Buffet object to the database
//     const savedBuffet = await newBuffet.save();

//     // send a success response with the new Buffet object
//     res.status(201).json(savedBuffet);
//   } catch (err) {
//     next(err);
//   }
// };

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
