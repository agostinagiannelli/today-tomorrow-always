import { useState } from "react"

export const useCount = (initialValue = 1, min, max) => {
    if (initialValue < min || initialValue > max) {
        initialValue = min
    }
    const [count, setCount] = useState(initialValue)
    const plus = () => count < max && setCount(count + 1)
    const minus = () => count > min && setCount(count - 1)
    const reset = () => setCount(initialValue)
    return { count, plus, minus, reset }
}