import React,{useState} from 'react'

function HookCounter() {
    const initialval=0;
  const [count,setCount]=useState(initialval);//array destructring

  const increment5=()=>{
    for(let i=0;i<5;i++)
    {
        setCount(prevCount=>prevCount+1);
    }//if we not use prevCount then value gets increased by 1 only
  }

  return (
    <div>
        Count:{count}
        <button onClick={increment5}>increment5</button>
        <button onClick={()=>setCount(prevCount=>prevCount+1)}>increment</button>
    </div>
  )
}

export default HookCounter