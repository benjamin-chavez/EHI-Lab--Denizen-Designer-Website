class ParticipantsController < ApplicationController
  # before_action :authenticate_user!, except: [:index, :show]
  skip_before_action :authenticate_user!
  # skip_before_action :authenticate_user!, only: [:index, :show]

  def index
    @participants = Participant.all
  end

  def show
    @participant = Participant.find(params[:id])
    
  end

  private

  def particpant_params
    params.require(:participant).permit(:first_name, :last_name)
  end
end
