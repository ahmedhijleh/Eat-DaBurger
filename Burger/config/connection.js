var mysql=require("mysql");
var connection=mysql.createconnection({
	host:"localhost",
	user:"root",
	password:"A123321a",
	database:"burger_db"
}			);
connection.connect(function(err)){
	if(err){
		console.error("error connection"+ err.stack)
	}
	return;}
	console.log("connected as id"+ connection.threadId);              
});
module.export("connection");

