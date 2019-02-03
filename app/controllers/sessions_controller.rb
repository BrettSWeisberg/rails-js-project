class SessionsController < ApplicationController
  def new
    @manager = Manager.new
  end


    def create
      if auth_hash = request.env['omniauth.auth'] # log in omniauth
         manager = Manager.find_or_create_by_omniauth(auth_hash)
        if manager.save
         session[:manager_id] = manager.id
         redirect_to manager_path(manager)
        else
          render 'sessions/new'
        end
      else
        @manager = Manager.find_by(email: params[:session][:email].downcase) #bcrypt login
          if @manager && @manager.authenticate(params[:session][:password])
              session[:manager_id] = @manager.id
              redirect_to manager_path(@manager)
          else
              flash[:danger] = 'Invalid email/password combination'
              render 'sessions/new'
          end
      end
    end

  def destroy
    session.delete :manager_id
    redirect_to '/'
  end

private

  def auth
    request.env['omniauth.auth']
  end
end
