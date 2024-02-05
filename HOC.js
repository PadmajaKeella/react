import React from 'react'

const HOC = (Component) => {
  return (
    class extends React.Component{
        state = {
            auth : true
        }
        render(){
        return(
        <div>
           {this.state.auth ? <Component name="padmaja"/> :<h1>login please</h1>}
        </div>
        )
    }
}
  )
}


export default HOC
