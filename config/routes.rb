Rails.application.routes.draw do
  get '/', to: 'quandl#historical'
  get '/api/historical', to: 'quandl#historical'
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
