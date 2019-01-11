class ManagersController < ApplicationController


  def new
    if session[:manager_id]
      redirect_to '/'
    else
      @manager = Manager.new
    end
  end

  def create # new manager
    @manager = Manager.new(manager_params)
    if @manager.save
      session[:manager_id] = @manager.id
      redirect_to manager_path(@manager)
    else
      flash[:message] = "Reminder: Name and Email must be unique. Email must contain an @ symbol. Please try signing up again."
      redirect_to new_manager_path
    end
  end

  def show
    if session[:manager_id]
      @manager = Manager.find(params[:id])
       @manager.clients.build
      respond_to do |format|
        format.html { render :show }
        format.json { render json: @manager }
      end
    else
      redirect_to '/'
    end
  end

  def edit
    if session[:manager_id]
      @manager = Manager.find(params[:id])
    else
      redirect_to '/'
    end
  end

  def update
    if session[:manager_id]
      @manager = Manager.find(params[:id])
      @manager.update(manager_params)
      @manager.save
      redirect_to manager_path(@manager)
    else
      redirect_to '/'
    end
  end

private

  def manager_params
    params.require(:manager).permit(:name, :password, :email)
  end
end
