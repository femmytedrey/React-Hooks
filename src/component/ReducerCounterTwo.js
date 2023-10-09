import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch(action.type){
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

function ReducerCounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <p>Count - {count.firstCounter}</p>
        <button onClick = {() => dispatch({type:'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerCounterTwo