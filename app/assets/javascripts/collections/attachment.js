ExampleApp.Collection.Attachments = Backbone.Collection.extend({
	model: ExampleApp.Models.Attachment,
	url: '/attachments'
});