ExampleApp.Views.TasksIndex = Backbone.View.extend({
  initialize: function() {
    _.bindAll(this, "render");
    this.collection.bind("add", this.render);
  },

  render: function () {
    this.renderTemplate();
    this.renderTasks();
    return this;
  },

  renderTemplate: function() {
    $(this.el).html(JST['tasks/index']({ tasks: this.collection }));
  },

  renderTasks: function() {
    var self = this;
    this.collection.each(function(task) {
      var row = new ExampleApp.Views.TaskItem({ model: task });
      self.$('tbody').append(row.render().el);
    });
  }
});

// Aggregate index view

// ExampleApp.Views.TasksIndex = Backbone.View.extend({
// 	template: JST['tasks/tasks_index'],
// 	tagName: 'section',
// 	id: 'tasks',
// 	
// 	initialize: function()	{
// 		_.bindAll(this, "render");
// 		this.collection.bind("change", this.render);
// 		this.collection.bind("add", this.render);
// 		this.collection.bind("remove", this.render);
// 	},
// 	
// 	render: function()	{
// 		$(this.el).html(this.template({ tasks: this.collection }));
// 	}
// 	
// });