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

end
