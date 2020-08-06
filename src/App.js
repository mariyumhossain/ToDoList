import React, {Component} from 'react';
// import Todos from "./TaskList"

class TodoList extends Component{
    constructor(){
      super()
      this.state = {
        todos: [],
        currentToDo: "",
      }
      this.handleChange = this.handleChange.bind(this)
      this.addItem =  this.addItem.bind(this)
    }

    handleChange = event => {
      this.setState({
        currentToDo: event.target.value
      })
    }
    
  

    addItem = event => {
      event.preventDefault()
      this.setState( prevState => {
        var todo = prevState.todos.concat(this.state.currentToDo)
        return {
          todos: todo,
           currentToDo: ''
      }
      })
    }

  render(){
    const listItems = this.state.todos.map(td => 
      <ul key={this.state.todos.indexOf(td)}>{td}</ul>)
    return (

      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName"> Task Name: </label>
    <div>
    <h2>{listItems}</h2>
      <button>Delete</button>
    </div>
          <input onChange={this.handleChange} value={this.state.currentToDo} name="taskName" type="text" placeholder="Type ToDo here!"></input>
          <button type="submit" > Add Task</button>
        </form>
      </div>
    )
  }
}

export default TodoList;
