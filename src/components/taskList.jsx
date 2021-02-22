import { Component } from "react";

class Tasklist extends Component {
  render() {
    // console.log(this.props.task);
    return (
      <div key={this.props.task.taskId}>
        <p id={this.props.task.taskId}>{this.props.task.taskName}</p>
        <button onClick={this.props.deleteTask}>Delete</button>
      </div>
    );
  }
}

export default Tasklist;
