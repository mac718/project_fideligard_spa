Rails.application.routes.draw do
  get '/api/historical', to: 'quandl#historical'
end
