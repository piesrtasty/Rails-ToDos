
ExampleApp.Routers.Tasks = Backbone.Router.extend({
	routes: {
		"" 		: "index",
		"new"	: "newTask"
	},
	
	index: function()	{
		var view = new ExampleApp.Views.TasksIndex({ collection: this.collection });
		$('#tasks').html(view.render().el);
	},
	
	newTask: function()	{
		var view = new ExampleApp.Views.TasksNew({ collection: this.collection });
		$('#tasks').html(view.render().el)
	}

});