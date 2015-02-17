class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  def index
    @lists = List.all

    @presenter = {
      lists: List.last(5),
      form: {
        action: lists_path,
        csrf_param: request_forgery_protection_token,
        csrf_token: form_authenticity_token
      }
    }

    render template: 'layouts/index'
  end
end
