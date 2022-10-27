class Api::V1::BookingsController < ApplicationController
    protect_from_forgery with: :null_session
    def index
        bookings = Booking.all
        render json: bookings
    end
end
