ExampleApp.Views.CommentForm = Support.CompositeView.extend({
	
	events: {
		"click button": "createComment"
	},
	
	initialize: function()	{
		this.model = this.options.model;
	},
	
	render: function()	{
		$(this.el).html(JST['comments/new']);
	},
	
	createComment: function()	{
		var comment = new Comment({ text: $('.new-comment-input').val() });
		this.$('.new-comment-input').val();
		this.model.comments.create(comment);
	}
	
})