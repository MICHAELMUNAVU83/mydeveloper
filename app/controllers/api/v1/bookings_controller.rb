class Api::V1::BookingsController < ApplicationController
    def index
        bookings = Booking.where(user_id: current_user.id)
        render json: bookings
    end
    def create
        booking = Booking.new(booking_params)
        booking.user = current_user
        if booking.save
            render json: booking
        else
            render json: {error: booking.errors.messages}, status: 422
        end
    end

    private
    def booking_params
        params.require(:booking).permit(:name , :developer_id )
    end
end
