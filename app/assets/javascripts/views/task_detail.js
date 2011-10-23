ExampleApp.Views.TaskDetail = Backbone.View.extend({
	template: JST['tasks/tasks_detail'], // TODO create template file
	tagName: 'section',
	id: 'task',
	
	events: {
		"click .comments .form-inputs button": "createComment"
	},
	
	initialize: function()	{
		_.bindAll(this, "render");
		
		this.model.bind("change", this.render);
		this.model.comments.bind("change", this.render);
		this.model.comments.bind("add", this.render);
	},
	
	render: function()	{
		$(this.el).html(this.template({ task: this.model }));
	},
	
	createComment: function()	{
		
	}
	
	
})