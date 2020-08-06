import React from "react"

const Todos = (props) => {
const listItems = props.todos.map(td => 
        <ul key={props.todos.indexOf(td)}>{td}</ul>)
    return (
    <div>{listItems}</div>
    )
}

export default Todos