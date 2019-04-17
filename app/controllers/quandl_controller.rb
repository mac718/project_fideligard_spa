class QuandlController < ApplicationController
  def historical
    key = Figaro.env.QUANDL_API_KEY
    @results = []
    datasetCode = ['FB', 'BA']
    datasetCode.each do |code|
      @results.push(HTTParty.get("https://www.quandl.com/api/v3/datasets/WIKI/#{code}/data.json?start_date='2018-01-01'&api_key=#{key}"))
    end
    render json: @results, status: :ok
  end
end
