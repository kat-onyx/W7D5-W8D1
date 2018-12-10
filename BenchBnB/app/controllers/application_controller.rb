class ApplicationController < ActionController::Base
    helper_method :current_user, :ensure_logged_in, :signed_in?

    attr_reader :current_user

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def signed_in?
        !!current_user
    end

    def login!(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def logout
        @current_user.try(reset_session_token!)
        session[:session_token] = nil
        @current_user = nil
    end

    def ensure_logged_in
        unless current_user render json: { ['Must be logged in']}
    end
end
