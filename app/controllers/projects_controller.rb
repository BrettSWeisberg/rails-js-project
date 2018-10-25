class ProjectsController < ApplicationController
  def new
    if session[:manager_id]
      @project = Project.new
      @client = Client.new
      @project.build_client
      flash[:message] = "All Attributes must be filled in and the Project name needs to be unique."
    else
      render :new
    end
  end

  def create # new manager
    if session[:manager_id]
        @project = Project.new(project_params)
        if @project.save
          redirect_to project_path(@project)
        else
          redirect_to new_project_path
        end
    else
      redirect_to '/'
    end
  end

  def show
      @project = Project.find(params[:id])
  end

  def edit
    if session[:manager_id]
      @project = Project.find(params[:id])
    else
      redirect_to '/'
    end
  end

  def update
    if session[:manager_id]
      @project = Project.find(params[:id])
      @project.update(project_params)
      @project.save
    else
      redirect_to '/'
    end
  end

private

  def project_params
    params.require(:project).permit(:name, :completed, :manager_id, :client_id)
  end
end
