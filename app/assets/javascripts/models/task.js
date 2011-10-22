ExampleApp.Models.Task = Backbone.Model.extend({
  schema: {
    title: { type: "Text" }
  },

  urlRoot: '/tasks',

	isComplete: function()	{
		return this.get('complete');
	}
});