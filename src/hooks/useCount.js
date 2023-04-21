import { useState } from "react"

export const useCount = (InitialValue = 1, min, max) => {
    if (InitialValue < min || InitialValue > max) {
        InitialValue = min
    }
    const [count, setCount] = useState(InitialValue)
    const plus = () => count < max && setCount(count + 1)
    const minus = () => count > min && setCount(count - 1)
    const reset = () => setCount(InitialValue)
    return { count, plus, minus, reset }
}