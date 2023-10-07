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

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value ={'Vishwas'}>
        <ChannelContext.Provider value ={'Codevolution'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
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
  );
}

export default App;
