import React,{useState,useEffect} from 'react'

function HookMouseevent() {
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('mouse event');
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(()=>{
    console.log('use Effect called');
    window.addEventListener('mousemove',logMousePosition);
    return ()=>{
      console.log('component kkkkkkkk');
      window.removeEventListener('mousemove',logMousePosition)
    }
  },[])

  return (
    <div> X:{x}  Y:{y}</div>
  )
}

export default HookMouseevent