// var ExampleApp = {
// 	Models: {},
// 	Collections: {},
// 	Views: {},
// 	Routers: {},
// 	init: function(tasks)	{
// 		new ExampleApp.Routers.Tasks();
// 		this.tasks = new ExampleApp.Collections.Tasks(tasks);
// 		if (!Backbone.history.started)	{
// 		  Backbone.history.start();
// 			Backbone.history.started = true;
// 		}
// 		
// 	alert(tasks[0]['title']);
// 	
// 	}
// };

var ExampleApp = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	
	init: function(tasks)	{
		this.tasks = ExampleApp.Collections.Tasks(tasks);
		
		new ExampleApp.Routers.Tasks();
		if (!Backbone.history.started)	{
			Backbone.history.start();
			Backbone.history.started = true;
		}
	}

};
