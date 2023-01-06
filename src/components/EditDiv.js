import React, { Component } from "react";

class EditDiv extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="EditDiv hidden">
        <h2 className="EditDivContent">Edit</h2>
      </div>
    );
  }
}

export default EditDiv;
