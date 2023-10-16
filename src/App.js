import './App.css';
import React from 'react';
import ClassCounter from './component/ClassCounter';
import ClassCounterOne from './component/ClassCounterOne';
import HookCounter from './component/HookCounter';
import HookCounter4 from './component/HookCounter4';
import HookCounterOne from './component/HookCounterOne';
import HookCounterThree from './component/HookCounterThree';
import HookCounterTwo from './component/HookCounterTwo';
import HookMouse from './component/HookMouse';
import MouseContainer from './component/MouseContainer';
import IntervalClassCounter from './component/IntervalClassCounter';
import IntervalHookCounter from './component/IntervalHookCounter';
import DataFetching from './component/DataFetching';
import ComponentC from './component/ComponentC';
import ReducerCounterOne from './component/ReducerCounterOne';
import ReducerCounterTwo from './component/ReducerCounterTwo';
import ReducerCounterThree from './component/ReducerCounterThree';
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';
import { useReducer } from 'react';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
export const CountContext = React.createContext()


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

function App() {
  const  [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value = {{ countState: count, countDispatch: dispatch}}>
        <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
        
        {/* <ReducerCounterThree /> */}
        {/* <ReducerCounterTwo /> */}
        {/* <ReducerCounterOne /> */}
        {/* <UserContext.Provider value ={'Vishwas'}>
            <ChannelContext.Provider value ={'Codevolution'}>
            <ComponentC />
            </ChannelContext.Provider>
        </UserContext.Provider> */}
        {/* <DataFetching /> */}
        {/* <IntervalClassCounter /> */}
        {/* <IntervalHookCounter /> */}
        {/* <MouseContainer /> */}
        {/* <HookMouse /> */}
        {/* <ClassCounterOne /> */}
        {/* <HookCounterOne /> */}
        {/* <HookCounter4 /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounter /> */}
        {/* <ClassCounter /> */}
        </div>
    </CountContext.Provider>
  );
}

export default App;
