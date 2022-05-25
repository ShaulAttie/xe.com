import './App.css';
import { useState } from 'react';
import InputAmount from './Components/InputAmount'
import CurrencyOptions from './Components/CurrencyOptions';

const currencies = [
  { key: 'c0', currency: "Choose", value: 0 },
  { key: 'c1', currency: "USD", value: 1 },
  { key: 'c2', currency: "ILS", value: 3.3460459 },
  { key: 'c3', currency: "BZL", value: 4.8509077 },
  { key: 'c4', currency: "EUR", value: 0.93827181 },
]

var fromCurrencyName
var fromCurrencyValue
var toCurrencyName
var toCurrencyValue


function App() {

  const currencyOnchangeHandlers = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    if (e.target.id === 'fromCurrency') {
      fromCurrencyName = e.target.value
      currencies.filter(elem => (elem.currency === fromCurrencyName) && (fromCurrencyValue = elem.value))
      console.log(fromCurrencyValue);
      setFromName(fromCurrencyName)
      setFromAmount((1).toFixed(2))
      setToAmount((toCurrencyValue / fromCurrencyValue).toFixed(2))
    }
    if (e.target.id == 'toCurrency') {
      toCurrencyName = e.target.value
      currencies.filter(elem => (elem.currency == e.target.value) && (toCurrencyValue = elem.value))
      console.log(toCurrencyValue);
      setToName(toCurrencyName)
      setToAmount((toCurrencyValue / fromCurrencyValue).toFixed(2))
    }
  }


  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);

  const [fromName, setFromName] = useState('Choose');
  const [toName, setToName] = useState('Choose');


  const convert = (e) => {
    if (e.target.value >= 0) {

      if (e.target.id === "fromAmount") {
        setFromAmount(e.target.value)
        setToAmount((e.target.value * toCurrencyValue / fromCurrencyValue).toFixed(2))
      } else {
        setToAmount(e.target.value)
        setFromAmount((e.target.value / (toCurrencyValue / fromCurrencyValue)).toFixed(2))
      }
    }
  }


  return (
    <div className="App">
      <h1>XE.com Cover</h1>
      <div className="body">
      <div className="inputs">
        <div id="input_left">
          <InputAmount id="fromAmount" lbl={fromName} value={fromAmount} convert={convert} />
        </div>
        <h1 id="h1">
          =
        </h1>
        <div id="input_right">
          <InputAmount id="toAmount" lbl={toName} value={toAmount} convert={convert} />
        </div>
        <br />
        <br />
      </div>
      </div>

      <div>
        <label htmlFor="fromCurrency">From Currency:</label>
        <select name="fromCurrency" id="fromCurrency" onChange={currencyOnchangeHandlers}>
          {currencies.map(elem =>
            <CurrencyOptions value={elem.currency} key={elem.key} />)}
        </select>
        <br />
        <br />
        <label htmlFor="toCurrency">To Currency:</label>
        <select name="toCurrency" id="toCurrency" onChange={currencyOnchangeHandlers}>
          {currencies.map(elem =>
            <CurrencyOptions value={elem.currency} key={elem.key} />)}
        </select>
      </div>

    </div >
  );
}


export default App;
