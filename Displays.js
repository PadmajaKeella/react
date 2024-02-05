import React,{useContext,useState} from 'react'
import {store} from './App'

const Displays = () => {
    const [name,setName] = useState('');
    const [data,setData] = useContext(store);
    const submitHandler = e =>{
        e.preventDefault();
        setData([...data,{brandname:name}])
    }
  return (
    <div className="card">
    <div className="card-body">
      {data.map(item => <h3 className="card-title">{item.brandname}</h3>)}
    <form className='form' onSubmit={submitHandler}>
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="enter your brand"/>
        <input type="submit" value="add" />
    </form>
    </div>
    </div>
  )
}

export default Displays
