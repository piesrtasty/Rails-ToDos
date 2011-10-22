class TasksController < ApplicationController
  respond_to :html, :json

  def index
     respond_with(@tasks = Task.all)
  end
  
  ## Equivalent to the above
  
  # def index
  #     @tasks = Task.all
  #     respond_to do |format|
  #       format.html
  #       format.json { render :json => @tasks }
  #     end
  #   end
  
  def create
    respond_with(Task.create(params[:task]))
  end
  
  ## If you are implementing validations
  
  # def create
  #     @task = Task.new(params[:task])
  #     if @task.save
  #       respond_with(@task)
  #     else
  #       respond_with(@task, :status => :unprocessable_entity)
  #     end
  #   end
  
  

end