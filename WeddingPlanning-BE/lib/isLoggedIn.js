module.exports = (req, res , next) =>{
    if(!req.user) {
        //if there no user redirect it to the log in page
        res.redirect('/auth/signin')
    }
    else{
        //if there is a user move to the next step
        next()
    }
}