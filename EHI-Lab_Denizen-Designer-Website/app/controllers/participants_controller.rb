class ParticipantsController < ApplicationController
  # before_action :authenticate_user!, except: [:index, :show]
  skip_before_action :authenticate_user!, only: [:index, :show]

  def def index
    # @participants = Participant.all
    @participants = policy_scope(Participant).order(created_at: :desc)
  end

  def def show
    @participants = Participant.find(params[:id])
    authorize @participants
  end

  private

  def particpant_params
    params.require(:participant).permit(:first_name, :last_name)
  end
end
