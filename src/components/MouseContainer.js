import React,{useState,useEffect} from 'react'
import HookMouseevent from './HookMouseevent';

function MouseContainer() {
    const [display,setDisplay] = useState(true);



  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Toggle display</button>
        {display&&<HookMouseevent/>}
    </div>
  )
}

export default MouseContainer