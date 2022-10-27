class Api::V1::DevelopersController < ApplicationController
    protect_from_forgery with: :null_session

    def index
        developers = Developer.all
        render json: developers
    end
end
