import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {

  state = { prioritized: false }

  prioritize = e => {
    e.stopPropagation()
    this.setState({ prioritized: !this.state.prioritized})
  }

  render = () => {
    return (
      <div
        className={this.state.prioritized ? "todo-item prioritized" : "todo-item"}
        key = {this.props.itemKey}
        onClick = {() =>this.props.deleteItem(this.props.itemKey)}>
        <p className="todo-text">{this.props.text}</p>
        <button className="prioritize-btn" onClick={this.prioritize}>!</button>
      </div>
    )
  }

}

export default TodoItem
