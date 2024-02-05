// import React,{useContext} from 'react'
// import {store} from './App';
// const ComponentA = () => {
//     const [data,setData] = useContext(store)
//   return (
//     <div className="card">
//         <div className="card-body">
//       ComponentA{data}
//     </div>
//     </div>
//   )
// }

// export default ComponentA

import React from 'react'

const ComponentA = () => {
  const[count,setCount]=React.useState(0);
  React.useEffect(()=>{
    if(count==5){
      throw new Error('App crashed from componentA')
    }
  },[count])
  return (
    <div>
      <center>
        <h1>componentA : {count}</h1>
        <button onClick={()=>setCount(count+1)}>componentA increment</button>
      </center>
    </div>
  )
}

export default ComponentA
