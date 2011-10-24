ExampleApp.Views.TaskDetail = Backbone.View.extend({
	// template: JST['tasks/tasks_detail'], // TODO create template file
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
		$(this.el).html(JST['tasks/tasks_detail']({ task: this.model }));
	},
	
	createComment: function()	{
		var comment = new Comment({ text: this.$('.new-comment-input').val() });
		this.$('.new-comment-input').val('');
		this.model.comments.create(comment);
	}
	
	
})