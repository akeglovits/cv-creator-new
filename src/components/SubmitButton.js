import React, { Component } from "react";

class SubmitButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type="submit"
        className="SubmitButton hidden"
        onClick={this.props.finishEditing}
      >
        Submit
      </button>
    );
  }
}

export default SubmitButton;
