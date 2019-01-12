class StaticController < ApplicationController
  def home
    if session[:manager_id] != nil
      @manager = Manager.find(session[:manager_id])
  #  else
  #    render "home"
    end
  end
end
