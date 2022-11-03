class Api::V1::DevelopersController < ApplicationController
    protect_from_forgery with: :null_session

    def index
        developers = Developer.all
        render json: developers
    end
    def create
        developer = Developer.new(developer_params)
        if developer.save
            render json: developer
        else
            render json: {error: developer.errors.messages}, status: 422
        end
    end

    private
    def developer_params
        params.require(:developer).permit(:name,:email ,:stack)
    end

end
