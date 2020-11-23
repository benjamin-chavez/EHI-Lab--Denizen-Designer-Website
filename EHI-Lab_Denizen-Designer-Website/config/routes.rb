Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  # root to: 'participants#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :participants
  # get "posts/:id", to: 'pages#home' 


  # API routing
  # namespace :api, defaults: { format: :json } do
  #   namespace :v1 do
  #     resources :participants  [ :index, :show ] 
  #   end
  # end
end