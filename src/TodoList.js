import React, { Component } from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

class TodoList extends Component {

  createTodoItem = item => {
    return (<li key={item.key}>
      <TodoItem
        itemKey = {item.key}
        text = {item.text}
        deleteItem = {this.props.deleteItem}
      />
    </li>)
  }

  render(){
    return (
      <ul className = "theList">
        { this.props.entries.map(this.createTodoItem.bind(this))}
      </ul>
    )
  }
}

export default TodoList
