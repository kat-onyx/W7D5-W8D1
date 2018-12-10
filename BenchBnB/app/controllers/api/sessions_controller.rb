class API::SessionsController < ApplicationController {
    
    def create
        user = User.find_by_credentials(username: params[:user][:username], password: params[:user][:password])

        if user
            login!(user)
            redirect_to "api/users/show"
        else
            render json: { ["Invalid login credentials"]}
        end

    end

    def destroy
        user = current_user
        logout
    end


end
}