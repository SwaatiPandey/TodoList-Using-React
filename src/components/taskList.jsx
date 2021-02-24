import { Component } from "react";
import "../styles/taskList.css";
class Tasklist extends Component {
  render() {
    console.log("Task", this.props.task);
    return (
      <div className="todo-row" key={this.props.task.taskId}>
        <p className={this.props.task.status} id={this.props.task.taskId}>{this.props.task.taskName}</p>
        <button className="delete-button" onClick={this.props.deleteTask}>Delete</button>
        <button className="update-button" onClick={this.props.updateTask}>Update</button>
      </div>
    );
  }
}

export default Tasklist;
