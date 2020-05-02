Rails.application.routes.draw do
  get '/api/historical', to: 'quandl#historical'
  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
