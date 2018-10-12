import React from "react";
import "./message.css";
import ReactDOM from "react-dom";

let messageId = 0;
const modal = document.createElement("div");
modal.id = "message";
modal.className = "message";
document.body.prepend(modal);
export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.id = messageId++;
    Message.messages[this.id] = this;
  }
  static messages = {};
  componentDidMount = () => {
    setTimeout(() => this.removeSelf(), 3000 + 3000 * this.id);
  };
  removeSelf() {
    delete Message.messages[this.id];
    this.setState({});
  }
  //   componentWillUnmount() {
  //     this.removeSelf();
  //   }

  render() {
    return Message.messages[this.id]
      ? ReactDOM.createPortal(this.props.children, modal)
      : null;
  }
}
