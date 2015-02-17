class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  #hacky

  def index
    @lists = List.all
    render template: 'layouts/index'
  end
end
