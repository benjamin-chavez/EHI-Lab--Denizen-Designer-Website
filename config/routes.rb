Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # root to: 'participants#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :participants
  get "/denizendesigner/home", to: 'pages#home' 
  get "/denizendesigner/interviews", to: 'pages#home' 
  get "/denizendesigner/interviews/:id", to: 'pages#home' 
  get "/denizendesigner/report", to: 'pages#home' 
  get "/denizendesigner/designerdatabase", to: 'pages#home' 
  get "/denizendesigner/quotes", to: 'pages#home' 
  get "/denizendesigner/resources", to: 'pages#home' 


  # API
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :participants, only: [ :index, :show]
    end
  end

  # API routing
  # namespace :api, defaults: { format: :json } do
  #   namespace :v1 do
  #     resources :participants  [ :index, :show ] 
  #   end
  # end
end