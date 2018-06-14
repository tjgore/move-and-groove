Rails.application.routes.draw do
  root 'pages#index'
  devise_for :users, controllers: { registrations: "registrations" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/activity/show/:id' => 'activities#show', :as => :show_activity
  get '/activity/:id/edit' => 'activities#edit', :as => :edit_activity
  patch '/activity/:id/update' => 'activities#update', :as => :update_activity
  delete '/activity/:id/delete' => 'activities#destroy', :as => :delete_activity
  get '/activity/new(/:id)' => 'activities#new', :as => :new_activity
  post '/activity/create' => 'activities#create', :as => :create_activity
  get '/activity/profile' => 'activities#index', :as => :profile
  get '/activity/stopwatch' => 'activities#timer', :as => :timer
  get '/activities' => 'activities#activities', :as => :activities

  get '/about' => 'pages#about'


end
