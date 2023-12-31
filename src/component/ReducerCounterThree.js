import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state > 0 ? state - 1 : (alert('state cannot be less than 0'), state)
        case 'reset':
            return initialState
        default:
        return state
    }
}

function ReducerCounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
        <p>Count - {count}</p>
        <button onClick = {() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>

        <div>
            <p>Count - {countTwo}</p>
            <button onClick = {() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
        </div>
    </div>
  )
}

export default ReducerCounterThree