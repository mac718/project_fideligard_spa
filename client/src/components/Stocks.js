import React from "react";
import { retrievedStocks } from "../retrievedStocks";
import { getCurrentDateEntryIndex, makeUTCDate } from "../Helpers/dateHelpers";
import { Link } from "react-router-dom";
import FilterField from "./FilterField";

const Stocks = ({
  stockData,
  date,
  isFetchingHistoricalData,
  onClick,
  filterInput,
  handleFilter,
}) => {
  //date = makeUTCDate(date)
  const data = stockData.map((stock) => {
    console.log(stock);
    let currentDateEntryIndex = getCurrentDateEntryIndex(stock, date);

    let currentDateEntry = stock[currentDateEntryIndex];

    let yesterdayEntry =
      currentDateEntry[1] - stock[currentDateEntryIndex - 1][1];

    let lastWeekEntry =
      currentDateEntry[1] - stock[currentDateEntryIndex - 7][1];

    let lastMonthEntry =
      currentDateEntry[1] - stock[currentDateEntryIndex - 30][1];

    return [currentDateEntry[1], yesterdayEntry, lastWeekEntry, lastMonthEntry];
  });

  const stockDivs = data.map((entry, i) => {
    if (entry[0]) {
      if (filterInput === "" || retrievedStocks[i].includes(filterInput)) {
        return (
          <tr key={retrievedStocks[i]}>
            <td id={retrievedStocks[i]}>{retrievedStocks[i]}</td>
            <td id={`${retrievedStocks[i]}-price`}>
              {"$" + entry[0].toFixed(2)}
            </td>
            <td id={`${retrievedStocks[i]}-1d`}>
              {entry[1].toFixed(2) > 0
                ? "+$" + entry[1].toFixed(2)
                : "-$" + -entry[1].toFixed(2)}
            </td>
            <td id={`${retrievedStocks[i]}-7d`}>
              {entry[2].toFixed(2) > 0
                ? "+$" + entry[2].toFixed(2)
                : "-$" + -entry[3].toFixed(2)}
            </td>
            <td id={`${retrievedStocks[i]}-30d`}>
              {entry[3].toFixed(2) > 0
                ? "+$" + entry[3].toFixed(2)
                : "-$" + -entry[3].toFixed(2)}
            </td>
            <td>
              <Link to="/Trade" onClick={onClick}>
                trade
              </Link>
            </td>
          </tr>
        );
      } else {
        return (
          <tr key={i}>
            <td></td>
            <td>N/A</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        );
      }
    } else {
      return (
        <tr key={i}>
          <td></td>
          <td>N/A</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      );
    }
  });

  return (
    <div className="Stocks col-4-sm table-responsive p-2">
      <h1>Stocks</h1>
      <FilterField onChange={handleFilter} />

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>1 day</th>
            <th>7 day</th>
            <th>30 day</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          {isFetchingHistoricalData ? (
            <tr>
              <td>loading...</td>
            </tr>
          ) : (
            stockDivs
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Stocks;
