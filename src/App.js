import React from 'react';
import './App.css';
import Classcounter from './components/Classcounter';
import ComponentC from './components/ComponentC';
import Datafetching from './components/Datafetching';
import HookArray from './components/HookArray';
import HookCounter from './components/HookCounter';
import HookCounterOne from './components/HookCounterOne';
import HookMouseevent from './components/HookMouseevent';
import HookObject from './components/HookObject';
import MouseContainer from './components/MouseContainer';

export const UserContext=React.createContext();
export const ChannelContext=React.createContext();

function App() {
  return (
    <div className="App">
    <UserContext.Provider value={'Ankur'}>
      <ChannelContext.Provider value={'newly created'}>
          <ComponentC/>
      </ChannelContext.Provider>
    </UserContext.Provider>


{/* <Classcounter></Classcounter> */}
{/* <HookCounter/> */}
{/* <HookObject/> */}
{/* <HookArray/> */}
{/* <HookCounterOne/> */}
{/* <HookMouseevent/> */}
{/* <MouseContainer/> */}
{/* <Datafetching/> */}
    </div>
  );
}

export default App;
