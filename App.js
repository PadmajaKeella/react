// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import photo from './nature.jpg'
// const App = () => {
//   return (
//     <div><center>
//       <img src={photo} height="250" padding="20 20 20 20" width="auto" />
//       </center>
//     </div>
//   )
// }

// export default App

// // // audio files importing
// import React from 'react'
// import Audio from './audio.mp3.opus'
// const App = () => {
//   return (
//     <div>
//       <center>
//         <audio controls>
//             <source src={Audio} type="audio/ogg" />
//         </audio>
//       </center>
//     </div>
//   )
// }
// export default App

// // importing video file
// import React from 'react'
// import Videofile from './video.mp4';
// const App = () => {
//   return (
//     <div>
//         <center>
//             <video width="320" height="250" controls>
//                 <source src={Videofile} type="video/mp4"/>
//             </video>
//         </center>
      
//     </div>
//   )
// }

// export default App

// import React, { Component } from 'react'
// import Display from './display';
// export default class App extends Component {
//   state = {
//     name:"padmaja",
//     product:[]
//   }
//   componentDidMount(){
//       fetch('https://jsonplaceholder.typicode.com/todos').then(
//         res => res.json()
//       ).then(data => this.setState({products:data})).catch(err => console.log(err))
//   }
//   render() {
//     return (
//       <div>
//         {/* {this.state.products.map((product)=><li key={product.id}>{product.title}</li>)} */}
//           <Display data={this.state.products}/><br />
//           <button onClick={()=>this.setState({name:"telugu"})}>change name</button>
//       </div>
//     )
//   }
// }



// // useRef react hook - to get a value from the user and to properly assign values to variable
// // useState will re-render when the content change and update in UI
// // useRef - doesn't notify you when its content changes.mutating the (.current) property doesn't cause a re-render.
// import React,{useRef,useEffect} from 'react'

// const App = () => {
//   const data = useRef(null);
//   const submitHandler = e =>{
//     e.preventDefault();
//     console.log(data.current.value);
//     //updating
//     // data.current.value = "hello world"
//     //data.current.value+1;
//   }
//   useEffect(()=>{
//     data.current.focus();
//   },[])
//   return (
//     <div><center>
//       <form onSubmit={submitHandler}>
//         <input ref={data} type="text" placeholder="enter your name" /><br />
//         <input  type="submit" />
//       </form></center>
//     </div>
//   )
// }

// export default App

// // useReducer hook
// //it has work flow as redux ()                     
// //redux - use to store state values in redux-store
// //useReducer - use to store state values to local const variable
// // syntax:   const[state,dispatch] = useReducer(reducer,initialState);

// import React,{useReducer} from 'react';
// const initialState = {count:0};
// function reducer(state,action){
//   switch(action.type){
//     case 'increment':
//       return {count:state.count+1};
//     case 'decrement':
//       return {count:state.count-1};
//     default:
//       throw new Error();
//   }
// }
// function App(){
//   const [state,dispatch] = useReducer(reducer,initialState);
//   return(
//     <center>
//       Count:{state.count}
//       <button onClick={() => dispatch({type:'decrement'})}>-</button>
//       <button onClick={() => dispatch({type:'increment'})}>+</button>

//     </center>
//   )
// }
// export default App;

// //context API is an kind of feature used to share data with multiple components.withoit passing the data through props manually.
 
// import React,{useState,createContext} from 'react'
// // import ComponentA from './ComponentA';
// // import ComponentB from './ComponentB';
// import Count from './Count';
// import Displays from './Displays'
// export const store = createContext();
// const App = () => {
//   const [data,setData] = useState([
//     {
//       brandname:"Nokia"
//     },
//     {
//       brandname : "Realme"
//     },
//     {
//       brandname : "MI"
//     }
//   ]);
//   return (
//     <store.Provider value={[data,setData]}>
//       <center>
//         {/* <ComponentA />
//         <ComponentB /> */}
//         <Count />
//         <Displays />
//         <button onClick={() =>setData(data+1)}>increment</button>
//       </center>
//       </store.Provider>
//   )
// }

// export default App


// //Higher-order components
// //a higher-order component(HOC) is an advanced technique in react for resuming component logic.
// //HOC is a pure function with zero side-effects and doesn't modify the input component
// //Higher-order component is a function that takes a component and returns a new component
// import React from 'react'
// import HOC from './HOC'
// const App = (props) => {
//   return (
//     <div>
//       <h1>welcome {props.name}</h1>
//     </div>
//   )
// }

// export default HOC(App);


// //useMemo() Hook - to improve entire application performance
// //useMemo will not run for every re-render
// //it will run during the first render and when it's dependency values changes
// //useEffect() will run after render of the component
// //useMemo() will run during render of the component
// import React from 'react'

// const App = () => {
//   const [counter,setCounter] = React.useState(0);
//   const [number,setNumber] = React.useState(5);
//   const Factorial = React.useMenu(()=>{fact(number)},[number]);
//   return (
//     <div>
//       <center>
//         Factorial : {Factorial}     <br />
//         <button onClick={()=>setCounter(counter+1)}>Counter increment</button><br />
//         <button onClick={()=>setNumber(number+1)}>Number increment</button><br />

//         counter : {counter}
//       </center>
//     </div>
//   )
// }
// const fact = (n) =>{
//   let answer = 1;
//   for (var i = n;i>=1;i--){                       
//     answer=answer*i;
//   }
//   console.log('factorial function calling');
//   return answer;
// }

// export default App


//useEffect  VS  useMemo

// //syntax is same for both useMemo(()=>{},[a,..]) and useEffect()


// import React from 'react'

// const App = () => {
//   const [effect,setEffect] = React.useState(0);
//   const [memo,setMemo] = React.useState(0);
//   React.useEffect(()=>{console.log('effect '+effect)},[effect]);
//   React.useMemo(()=>{console.log('memo '+memo)},[memo]);

//   return (
//     <center>
//       <button onClick={()=>setEffect(effect+1)}>useEffect component</button>
//       <button onClick={()=>setMemo(memo+1)}>useMemo component</button>

//     </center>
//   )
// }

// export default App



// //statefull
// import React from 'react'

// const App = () => {
//   const[count,setCount] = React.useState(0);
//   return (
//     <div>
//       <center>
//         <h3>Count : {count}</h3>
//         <button onClick={()=>setCount+1}>Increment</button>
//       </center>
//     </div>
//   )
// }

// // export default App
// import React from 'react'

// const App = ([props]) => {
//   return (
//     <div>
//       <center>
//         <h1>count : {props.count}  just an suvvedfikk</h1>
//       </center>
//     </div>
//   )
// }

// export default App

// //controlled components and uncontrolled components


// //controlled - element data can be controlled by parent component through callbacks like onChange()
// //uncontrolled - elements data can be controlled by DOM itself

// import React from 'react'
// import Controlled from './Controlled';
// import Uncontrolled from './Uncontrolled';
// const App = () => {
//   return (
//     <div>
//       <center>
//         <Controlled />
//         <Uncontrolled /> 
//       </center>
//     </div>
//   )
// }

// export default App


//React.lazy()

//lazy loading used to increase the loading speed of application with dynamic importing concept
//bundling - converting more then one type of files into single file

//ErrorBoundry
//try-catch are imperative   ErrorBoundary are declarative
//Error boundary component will catch javascript errors anywhere in their child component tree and display a fallback UI
//syntax
//<ErrorBoundary>
//<componentA/> --->(child component)
//</ErrorBoundary>

//<ErrorBoundary> is not an react inbuilt importing component
import React from 'react'
import ErrorBoundary from './ErrorBoundary'
import ComponentA from './ComponentA'
const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <ComponentA />
      </ErrorBoundary>
    </div>
  )
}

export default App
// error can't be handled are 
//event handlers,Asynchronous code like settimeout and etc,server side errors,errror thrown by error boundary itself(rether than its children)