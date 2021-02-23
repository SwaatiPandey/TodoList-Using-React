import { Component } from "react";

class Tasklist extends Component {
  render() {
    return (
      <div key={this.props.task.taskId}>
        <p className={styles.this.props.task.status} id={this.props.task.taskId}>{this.props.task.taskName} - {this.props.task.status}</p>
        {/* .completed{strikethrough} */}
        <button onClick={this.props.deleteTask}>Delete</button>
        <button onClick={this.props.updateTask}>Update</button>
      </div>
    );
  }
}

export default Tasklist;
