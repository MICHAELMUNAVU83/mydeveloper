class Api::V1::BookingsController < ApplicationController
    protect_from_forgery with: :null_session
    def index
        bookings = Booking.where(user_id: current_user.id)
        render json: bookings
    end
end
