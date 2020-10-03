Rails.application.routes.draw do
  root to: 'simulations#index'
  devise_for :users
  resources :simulations
end
