import React, { Component } from "react";
import SubmitButton from "./SubmitButton";
import DeleteButton from "./DeleteButton";

class ButtonRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="buttonRow">
        <SubmitButton finishEditing={this.props.finishEditing} />
        <DeleteButton
          deleteEntry={this.props.deleteEntry}
          entryId={this.props.entryId}
          entryType={this.props.entryType}
        />
      </div>
    );
  }
}

export default ButtonRow;
