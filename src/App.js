import './App.css';
import ClassCounter from './component/ClassCounter';
import HookCounter from './component/HookCounter';
import HookCounterTwo from './component/HookCounterTwo';

function App() {
  return (
    <div className="App">
      <HookCounterTwo />
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
