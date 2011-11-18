ExampleApp.Views.TaskShow = Backbone.View.extend({
	
	initialize: function()	{
		_.bindAll(this, "render");
	},
	
	events: {
		"click .upload button" : "upload"
	},
	
	render: function()	{
		this.renderTemplate();
		this.renderTask();
		this.renderAttachments();
		this.attachUploader();
		return this;
	},
	
	renderTemplate: function()	{
		$(this.el).html(JST['tasks/show']());
	}
	
})