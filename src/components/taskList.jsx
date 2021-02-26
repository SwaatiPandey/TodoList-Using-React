import { Component } from "react";
import "../styles/taskList.css";
class Tasklist extends Component {
  render() {
    return (

      <div title = "tasklist-component"className="todo-row" key={this.props.task.taskId}>
        <p className={this.props.task.status} id={this.props.task.taskId}>{this.props.task.taskName}</p>
        <button title= "Edit"className="edit-button" onClick={this.props.updateTask}>Edit</button>
        <button title= "Completed"className="update-button" onClick={this.props.updateStatus}>Completed</button>
        <button title= "Delete"className="delete-button" onClick={this.props.deleteTask}>Delete</button>
      </div>
    
    );
  }
}

export default Tasklist;