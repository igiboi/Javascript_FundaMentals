const { useState, useMemo } = React;

const rates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};

const currencies = Object.keys(rates);

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const convertedAmounts = useMemo(() => {
    return currencies.reduce((accumulator, code) => {
      accumulator[code] = (amount / rates[fromCurrency]) * rates[code];
      return accumulator;
    }, {});
  }, [amount, fromCurrency]);

  return (
    <main className='container'>
      <h1>Currency Converter</h1>

      <div className='field'>
        <label htmlFor='amount'>Amount</label>
        <input
          id='amount'
          type='number'
          min='0'
          step='any'
          placeholder='0.00'
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>

      <div className='row'>
        <div className='field'>
          <label htmlFor='from'>From</label>
          <select
            id='from'
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>

        <div className='field'>
          <label htmlFor='to'>To</label>
          <select
            id='to'
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className='result'>
        {convertedAmounts[toCurrency].toFixed(2)} {toCurrency}
      </p>
    </main>
  );
};
