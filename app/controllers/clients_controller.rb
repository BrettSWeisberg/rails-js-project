class ClientsController < ApplicationController


  def index
    @clients = Client.all
  end

  def new
     if session[:manager_id]
       @client = Client.new
      # @project = Project.new
       @client.projects.build
     else
       redirect_to '/'
     end
  end

  def create
    if session[:manager_id]
      @client = Client.new(client_params)
      if @client.save
        #  redirect_to client_path(@client)
      else
          flash[:message] = "Client name needs to be unique and created with a project."
          redirect_to new_client_path
      end
    else
      redirect_to '/'
    end
  end

  def show
      @client = Client.find(params[:id])
      respond_to do |format|
        format.html { render :show }
        format.json { render json: @client }
      end
  end

  def edit
    if session[:manager_id]
      @client = Client.find(params[:id])
    else
      redirect_to '/'
    end
  end

  def update
    if session[:manager_id]
      @client = Client.find(params[:id])
      @client.update(client_params)
      @client.save
      redirect_to client_path(@client)
    else
      redirect_to '/'
    end
  end

private

  def client_params
    params.require(:client).permit(:name, :projects_attributes => [:name, :completed, :client_id, :manager_id])
  end
end
