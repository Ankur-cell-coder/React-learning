import React,{useState} from 'react'

function HookObject() {
  const [name,setName] = useState({firstname:'',secondname:''})
  return (
    <form>
   <input type='text'
          value={name.firstname}
          onChange={e =>setName({...name,firstname:e.target.value})}/>
   <input type='text'
   value={name.secondname}
   onChange={e =>setName({...name,secondname:e.target.value})}/>
   <h2>Your first name is:{name.firstname}</h2>
   <h2>You second name is:{name.secondname}</h2>
   </form>
  )
}

export default HookObject