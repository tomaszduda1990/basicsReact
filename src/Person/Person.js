import React from 'react'

const person = props => {
    return (
        <div>
            <h2>I am {props.name} person and I am {props.age} years</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.textInput} value={props.name}/>
            <button onClick={props.clicker}>Clicker</button>
        </div>
    )
}

export default person;