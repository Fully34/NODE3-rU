var indexController = {
	index: function(req, res) {
		res.render('index');
	},

    formSubmit : function(req, res) {

        // console.log(req.body); //> this is an object in the form of { email : 'email@email.com'}

        // redirect the user when they submit the form
        res.redirect('/success');
    },

    successPage : function(req, res) {

        // console.log(req.body); //> there is no body property here
        res.send("GREAT JOB, YOU USED A FORM!  You're the coolest person ever. /s")
    }
};

module.exports = indexController;