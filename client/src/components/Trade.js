import React from "react";
import InputGroup from "./elements/InputGroup";
import TradeDropdown from "./TradeDropdown";
import { makeDateString } from "../Helpers/dateHelpers";
import { Prompt } from "react-router-dom";

const Trade = ({
  date,
  selectedStock,
  onBlur,
  handleSymbolChange,
  cost,
  validSymbol,
  onSubmit,
  cashAvailable,
  dateString,
  stockData,
  price,
  hasFormData,
  readOnly,
  submitDisabled,
}) => {
  return (
    <div id="Trade">
      <h2>Trade</h2>
      <div className="TradeForm col-8-sm">
        <form id="buySell" onSubmit={onSubmit}>
          <InputGroup name="Symbol" labelText="Symbol">
            <input
              className={validSymbol ? "normal" : "warning"}
              type="text"
              name="Symbol"
              className="form-control"
              value={selectedStock.symbol}
              onChange={handleSymbolChange}
              readOnly={readOnly}
            />{" "}
            {validSymbol ? "" : <p id="warning-message">Invalid Symbol</p>}
          </InputGroup>
          <InputGroup name="Buy/Sell" labelText="Buy/Sell">
            <TradeDropdown />
          </InputGroup>
          <InputGroup name="Quantity" labelText="Quantity">
            <input
              type="text"
              name="Quantity"
              className="form-control"
              onBlur={onBlur}
            />
          </InputGroup>
          <InputGroup name="Date" labelText="Date">
            <input
              type="date"
              name="Date"
              id="Date"
              min="2017-01-01"
              max="2017-12-31"
              value={makeDateString(date)}
              readOnly={true}
              className="form-control"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="Price">Price: $</label>
            <input
              type="text"
              name="Price"
              value={
                selectedStock.stockPrice ? selectedStock.stockPrice : price
              }
              id="Price"
              readOnly={true}
              className="form-control"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="Price">Cost: $</label>
            <input
              type="text"
              name="Cost"
              value={cost}
              id="Cost"
              readOnly={true}
              className="form-control"
            />
          </InputGroup>
          <input
            className="btn btn-success btn-lg w-100"
            type="submit"
            disabled={submitDisabled}
          />
          <Prompt
            when={hasFormData}
            message="Your form contains unsubmitted data. Are you sure you want to leave?"
          />
        </form>
      </div>
      <div className="cash col-4">
        <h5>Cash Available:</h5>
        <p>${cashAvailable.toFixed(2)}</p>
        <h5>Trade Status</h5>
        {submitDisabled ? (
          <p id="InvalidTradeStatus">INVALID</p>
        ) : (
          <p id="ValidTradeStatus">VALID</p>
        )}
      </div>
    </div>
  );
};

export default Trade;
