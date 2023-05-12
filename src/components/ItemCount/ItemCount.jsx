import { useCount } from "../../hooks/useCount.js"

export const ItemCount = ({ initialValue, min, max, onAdd }) => {
  const { count, minus, plus, reset } = useCount(initialValue, min, max)

  return (
    <>
      <button className="btn btn-dark" onClick={minus}>-</button> {count} <button className="btn btn-dark" onClick={plus}>+</button>
      <button className="btn btn-dark" onClick={reset}>Reset</button>
      <button className="btn btn-info" onClick={() => onAdd(count)}>Add to cart</button>
    </>
  )
}