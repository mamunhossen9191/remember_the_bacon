class Api::TasksController < ApplicationController
  before_action :require_logged_in

  def index
    @tasks = current_user.tasks
    render :index
  end

  def show
    @task = current_user.tasks.find_by(id: params[:id])
    render :show
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      render :show
    else
      render json: ['Create task failed. Some entry cannot be empty']
    end
  end

  def update
    @task = current_user.tasks.find_by(id: params[:id])

    if @task.update_attributes(task_params)
      render :show
    else
      render json: ['Create task failed. Some entry cannot be empty']
    end
  end

  def destory
    @task = current_user.tasks.find_by(id: params[:id])
    render json: {}
  end

  private

  def task_params
    params.require(:task).permit(:list_id, :description, :due_date, :estimate, :completed)
  end
end
