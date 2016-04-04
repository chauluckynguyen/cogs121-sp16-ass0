var models = require('../models');

exports.send = function(req,res) {
	console.log(req.body); // help you see what is inside of req.body
	//your solution here
	var body = req.body;
	var date = new Date();
	var dateString = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
	var MessageSchema = new models.Message({
		"email": body.email,
		"content": body.content,
		"created": dateString
	});

	models.Message
		.find({})
		.exec(justWork);

	function justWork(err, message_posts){
		var data = {data:message_posts};
		MessageSchema.save(function(){
			res.redirect('/');
		});
	}
};

