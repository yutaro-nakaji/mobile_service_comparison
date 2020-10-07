class SimulationsController < ApplicationController
  
  def index
  end
  
  def new
    @simulation = Simulation.new
  end
  
  def create
    @simulation = Simulation.new(simulation_params)
    if @simulation.save
      redirect_to :show
    else
      render :new
    end
  end
  
  def edit
  end
  
  def show
  end

  private

  def simulation_params
    params.require(:simulation).permit(:current_phone_id, :duration_of_call, :generation_id, :data_traffic_id, :family_docomo, :family_au, :family_softbank, :optical_line_id)
  end

end
