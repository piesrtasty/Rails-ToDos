// ExampleApp.Views.TasksIndex = Backbone.View.extend({
// 	
// 	initialize: function()	{
// 		this.render();
// 	},
// 	
// 	render: function()	{
// 		$(this.el).html(JST['tasks/index']({ tasks: ExampleApp.tasks }));
// 		
// 		var tasksIndexView = this;
// 		ExampleApp.tasks.each(function(task)	{
// 			var taskView = new ExampleApp.Views.TaskView({model: task});
// 			tasksIndexView.$('table').append(taskView.render().el)
// 		});
// 		
// 		
// 		
// 		$('body').html(this.el);
// 		
// 		return this;
// 	}
// 
// })

ExampleApp.Views.TasksIndex = Backbone.View.extend({
	template: JST['tasks/tasks_index'],
	tagName: 'section',
	id: 'tasks',

	
	initialize: function()	{
		_.bindAll(this, "render");
		this.collection.bind("change", this.render);
		this.collection.bind("add", this.render);
		this.collection.bind("remove", this.render);

	},
	
	render: function()	{
		$(this.el).html(this.template({tasks: this.collection}))
	}
	
});