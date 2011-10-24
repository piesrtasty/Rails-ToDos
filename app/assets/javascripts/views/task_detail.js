// ExampleApp.Views.TaskDetail = Backbone.View.extend({
// 	// template: JST['tasks/tasks_detail'], // TODO create template file
// 	tagName: 'section',
// 	id: 'task',
// 	
// 	events: {
// 		"click .comments .form-inputs button": "createComment"
// 	},
// 	
// 	initialize: function()	{
// 		_.bindAll(this, "render");
// 		
// 		this.model.bind("change", this.render);
// 		this.model.comments.bind("change", this.render);
// 		this.model.comments.bind("add", this.render);
// 	},
// 	
// 	render: function()	{
// 		$(this.el).html(JST['tasks/tasks_detail']({ task: this.model }));
// 	},
// 	
// 	createComment: function()	{
// 		var comment = new Comment({ text: this.$('.new-comment-input').val() });
// 		this.$('.new-comment-input').val('');
// 		this.model.comments.create(comment);
// 	}
// 	
// 	
// })

ExampleApp.Views.TaskDetail = Support.CompositeView.extend({
	tagName: 'section',
	id: 'task',
	
	initialize: function()	{
		_.bindAll(this, "renderDetails");
		this.model.bind("change", this.renderDetails);
	},
	
	render: function()	{
		this.renderLayout();
		this.renderDetail();
		this.renderCommentsList();
	},
	
	renderLayout: function()	{
		$(this.el).html(JST['tasks/show']());
	},
	
	renderDetails: function()	{
		var detailsMarkup = JST['tasks/details']({ task: this.model });
		this.$('.task-details').html(detailsMarkup);
	},
	
	renderCommentsList: function()	{
		var commentsList = new CommentsList({ model: this.model });
		var commentsContainer = this.$('comments');
		this.renderChildInto(commentsList, commentsContainer);
	}
	
});