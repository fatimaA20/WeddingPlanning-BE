const DJ = require("../models/DJ");


exports.DJ_create_get = (req, res) => {
    res.render('../views/DJ/add.ejs')
}

// HTTP GET - DJ Index
exports.DJ_index_get = (req, res) => {
    console.log(req.body)
        .then(DJ => {
            res.render('../views/DJ/index.ejs')
        })
        .catch(err => {
            console.log(err)
        })
}

// HTTP GET - DJ by Id
exports.DJ_show_get = (req, res) => {
    console.log(req.query.id)
    DJ.findById(req.query.id)
        .then(DJ => {
            res.render('../views/DJ/detail.ejs', { DJ: DJ })
        })
        .catch(err => {
            console.log(err)
        })
}


exports.DJ_create_post = (req, res) => {
    console.log(req.body);
    let DJ = new DJ(req.body);

    DJ.save()
        .then((DJ) => {
            res.redirect('/DJ/index')
            // res.json({DJ})

        })
        .catch((err) => {
            console.log(err);
            res.send("Please try again later");
        });
}

exports.Dj_edit_get=(req,res)=>{
    DJ.findById(req.query.id)
    .then((DJ)=>{
        res.render('../views/DJ/edit.ejs',{DJ})
        })
        .catch((err)=>{
            console.log(err);
            res.send("Please try again later");
            });
}



//  HTTP PUT -DJ Update
exports.DJ_update_put = (req, res) => {
    console.log(req.body._id);
    DJ.findByIdAndUpdate(req.body.id, req.body)
        .then((DJ) => {
            res.redirect('/DJ/index')
        })
        .catch(err => {
            console.log(err)
        });
}

// HTTP DELETE - DJ
exports.DJ_delete_get = (req, res) => {
    console.log(req.query.id);
    DJ.findByIdAndDelete(req.query.id)
        .then((DJ) => {
            res.redirect('/DJ/index')
        })
        .catch((err) => {
            console.log(err);
        });
}