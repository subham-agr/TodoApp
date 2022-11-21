import React from 'react'

function Textfield(props) {
  return (
      <>
      <h1>{props.heading}</h1>
      <div>
          <input className="form-control" type="text" placeholder="Default input" aria-label="default input example"></input>
      </div>
      <button className="btn btn-primary my-2">Add</button>
      </>
  )
}

export default Textfield
