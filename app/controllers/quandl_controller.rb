class QuandlController < ApplicationController
  def historical
    key = Figaro.env.QUANDL_API_KEY
    @results = []
    datasetCode = ['FB', 'BA', 'AAPL', 'GM'] #create method that returns array
    datasetCode.each do |code|
      @results.push(HTTParty.get("https://www.quandl.com/api/v3/datasets/WIKI/#{code}/data.json?start_date='2016-12-01'&end_date='2017-12-31'&api_key=#{key}"))
    end
    render json: @results, status: :ok
  end
end
