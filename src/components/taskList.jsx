import { Component } from "react";

class Tasklist extends Component {
  render() {
    // console.log(this.props.task);
    return (
      <div key={this.props.task.taskId}>
        <p id={this.props.task.taskId}>{this.props.task.taskName} - {this.props.task.status}</p>
        <button onClick={this.props.deleteTask}>Delete</button>
        <button onClick={this.props.updateTask}>Update</button>
      </div>
    );
  }
}

export default Tasklist;
