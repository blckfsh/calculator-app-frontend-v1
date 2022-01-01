import { useContext } from 'react'
import { CalContext } from '../App'

function KeyItems() {

  const { onClick, onClickMathOps, onPlusOrMinus, onModulo } = useContext(CalContext)

  return (
    <>
      <button name="C" onClick={e => onClick(e.target.name)}>C</button>
      <button name="-/+" onClick={e => onPlusOrMinus(e.target.name)}>-/+</button>
      <button name="%" onClick={e => onModulo(e.target.name)}>%</button>
      <button name="/" onClick={e => onClickMathOps(e.target.name)}>/</button>
      <button name="1" onClick={e => onClick(e.target.name)}>1</button>
      <button name="2" onClick={e => onClick(e.target.name)}>2</button>
      <button name="3" onClick={e => onClick(e.target.name)}>3</button>
      <button name="+" onClick={e => onClickMathOps(e.target.name)}>+</button>
      <button name="4" onClick={e => onClick(e.target.name)}>4</button>
      <button name="5" onClick={e => onClick(e.target.name)}>5</button>
      <button name="6" onClick={e => onClick(e.target.name)}>6</button>
      <button name="-" onClick={e => onClickMathOps(e.target.name)}>-</button>
      <button name="7" onClick={e => onClick(e.target.name)}>7</button>
      <button name="8" onClick={e => onClick(e.target.name)}>8</button>
      <button name="9" onClick={e => onClick(e.target.name)}>9</button>
      <button name="*" onClick={e => onClickMathOps(e.target.name)}>*</button>
      <button name="0" onClick={e => onClick(e.target.name)}>0</button>
      <button name="." onClick={e => onClick(e.target.name)}>.</button>
      <button name="=" onClick={e => onClick(e.target.name)}>=</button>

    </>
  )
}

export default KeyItems
