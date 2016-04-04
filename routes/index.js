var models = require('../models');

exports.view = function(req, res) {
    /*var data = {data: []};*/
    models.Message 
    	.find({})
	.exec(displayMessage);

    function displayMessage(err, posts){
    	var data = {data:posts};
    	res.render("index", data);
    }
}
