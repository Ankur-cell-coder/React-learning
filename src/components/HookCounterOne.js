import React,{useEffect,useState} from 'react'

function HookCounterOne() {
    const [count,setCount] = useState(0)
    const [name,setName]=useState(' ');
    useEffect(()=>{
        console.log('useEffect - updating document title');
        document.title=`you clicked ${count} times`
    },[count])   //here we set condition that when count change then only run this

  return (
    <div>
        <input type='text' value={name} 
        onChange={e => setName(e.target.value)}
        ></input>
        <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOne