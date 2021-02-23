import { Component } from "react";
import "../styles/taskList.css";
class Tasklist extends Component {
  render() {
    return (
      <div className="todo-row" key={this.props.task.taskId}>
        <p className="" id={this.props.task.taskId}>{this.props.task.taskName} - {this.props.task.status}</p>
        {/* .completed{strikethrough} */}
        <button className="delete-button" onClick={this.props.deleteTask}>Delete</button>
        <button className="update-button" onClick={this.props.updateTask}>Update</button>
      </div>
    );
  }
}

export default Tasklist;
