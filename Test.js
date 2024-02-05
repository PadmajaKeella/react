import React from 'react'

const Test = (props) => {
  return (
    <div>
      <center>
        <input type="text" onChange={props.changeHandler}/>
      </center>
    </div>
  )
}

export default Test
