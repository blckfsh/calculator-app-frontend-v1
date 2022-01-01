import React, { useState, useEffect, useCallback } from 'react'
import './App.css'
import Result from './components/result'
import KeyItems from './components/keyitems'

export const CalContext = React.createContext();

function App() {

  const [number, setNumber] = useState('')
  const [storedNumber, setStoredNumber] = useState('')
  const [mathOps, setMathOps] = useState('')

  const onClick = (button) => {
    if (button === '=') {
      calculate()
    } else if (button === 'C') {
      reset()
    } else if (button === '-/+') {
      onPlusOrMinus()
    } else if (button === '%') {
      onModulo()
    } else if (button === '+' || button === '-' || button === '*' || button === '/') {
      onClickMathOps()
    } else {
      setNumber(number + button)
    }
  }

  const storedValue = () => {
    setStoredNumber(number)
    setNumber('')
  }

  const onClickMathOps = useCallback((button) => {
    if (number) {
      setMathOps(button);
      storedValue();
    }
    if (storedNumber) {
      setMathOps(button);
    }
  }, [number])

  const onPlusOrMinus = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`)
      } else {
        const positiveNumber = number.slice(1)
        setNumber(positiveNumber)
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`)
    } else {
      const positiveNumber = storedNumber.slice(1)
      setStoredNumber(positiveNumber)
    }
  }

  const onModulo = () => {
    let currentValue

    if (number && !storedNumber) currentValue = parseFloat(number)
    if (!number && storedNumber) currentValue = parseFloat(storedNumber)

    let modValue = parseFloat(currentValue) / 100
    let fixedValue = modValue.toString().replace('.', '')

    if (number > 0) {
      setNumber(modValue.toFixed(fixedValue.length))
    } else if (storedNumber > 0) {
      setStoredNumber(modValue.toFixed(fixedValue.length))
    } else {
      const positiveNumber = storedNumber.slice(1)
      setStoredNumber(positiveNumber)
    }
  }

  const calculate = useCallback(() => {
    if (number && storedNumber) {
      switch (mathOps) {
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`)
          break
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`)
          break
        case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`)
          break
        case '*':
          setStoredNumber(`${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`)
          break
        default:
          break;
      }
      setNumber('')
    }
  }, [number])

  const reset = useCallback(() => {
    setNumber('')
    setStoredNumber('')
    setMathOps('')
  }, [])

  useEffect(() => {
    console.log('parent render')
    reset()
  }, [])

  return (
    <div className="container-fluid">
      <h1>Calculator</h1>
      <div className="calculator">
        <div className="calc-header">
          <div className="calc-result">
            <CalContext.Provider value={{number, storedNumber }}>
              <Result />
            </CalContext.Provider>
          </div>
        </div>
        <div className="calc-body">
          <div className="calc-keypad">
            <CalContext.Provider value={{ onClick, onClickMathOps, onPlusOrMinus, onModulo }}>
              <KeyItems />
            </CalContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
