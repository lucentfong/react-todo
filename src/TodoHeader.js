import React, { Component } from 'react'
import './TodoHeader.css'

class TodoHeader extends Component {
  componentDidUpdate(){
    this.props.inputElement.current.focus()
  }
  render() {
    return (
      <div className = "todoListMain">
        <div className = "header">
          <form className="todo-form" onSubmit = {this.props.addItem}>
            <input
              className="todo-input"
              placeholder = "Task"
              ref = {this.props.inputElement}
              value = {this.props.currentItem.text}
              onChange = {this.props.handleInput}
            />
            <button type = "submit" className="submit-btn">+</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoHeader
