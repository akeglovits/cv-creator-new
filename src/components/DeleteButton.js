import React, { Component } from "react";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type="button"
        className="DeleteButton hidden"
        onClick={(e) =>
          this.props.deleteEntry(this.props.entryId, this.props.entryType)
        }
      >
        Delete
      </button>
    );
  }
}

export default DeleteButton;
