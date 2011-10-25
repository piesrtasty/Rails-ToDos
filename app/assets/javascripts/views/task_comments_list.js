ExampleApp.Views.CommentsList = Support.CompositeView.extend({
	tagName: 'ul',
	
	initialize: function()	{
		this.model.comments.bind("add", this.renderComments);
	},
	
	render: function()	{
		this.renderLayout();
		this.renderComments();
		this.renderCommentForm();
	},
	
	renderLayout: function()	{
		$(this.el).html(JST['comments/list']());
	},
	
	renderComments: function()	{
		var commentsContainer = this.$('comments-list')
		commentsContainer.html('');
		
		this.model.comments.each(function(comment)	{
			var commentMarkup = JST['comments/item']({ comment: comment });
			commentContainer.append(commentMarkup);
		});
	},
	
	renderCommentForm: function()	{
		var commentForm = new ExampleApp.Views.CommentForm({ model: this.model });
		var commentFormContainer = this.$('.new-comment-form');
		this.renderChildInto(commentForm, commentFormContainer);
	}
});

