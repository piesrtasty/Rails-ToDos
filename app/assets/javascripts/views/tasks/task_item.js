ExampleApp.Views.TaskView = Backbone.View.extend({
	initialize: function()	{
		
	},
	
	render: function()	{
		$(this.el).html(JST['tasks/view']({ model: this.model }));
		return this;
	}
});