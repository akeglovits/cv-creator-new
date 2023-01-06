import React, { Component } from "react";
import EditDiv from "./EditDiv";
import ButtonRow from "./ButtonRow";

class SchoolInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school, degree, grad, handleChange, startEditing, toggleEditDiv } =
      this.props;
    return (
      <div
        className="SchoolInfo InfoDiv"
        onClick={startEditing}
        onMouseEnter={toggleEditDiv}
        onMouseLeave={toggleEditDiv}
      >
        <form className="SchoolForm">
          <div className="School">
            <span className="SchoolDisplay">{school}</span>
            <input
              type="text"
              id="school"
              placeholder="School"
              value={school}
              onChange={(e) => handleChange(this.props.schoolId, e)}
              className="hidden"
            />
          </div>
          <div className="Grad">
            <span className="GradDisplay">{grad}</span>
            <input
              type="text"
              id="grad"
              placeholder="Grad Date"
              value={grad}
              onChange={(e) => handleChange(this.props.schoolId, e)}
              className="hidden"
            />
          </div>
          <div className="Degree">
            <span className="DegreeDisplay">{degree}</span>
            <input
              type="text"
              id="degree"
              placeholder="Degree"
              value={degree}
              onChange={(e) => handleChange(this.props.schoolId, e)}
              className="hidden"
            />
          </div>
          <ButtonRow
            finishEditing={this.props.finishEditing}
            deleteEntry={this.props.deleteEntry}
            entryId={this.props.schoolId}
            entryType="school"
          />
        </form>
        <EditDiv />
      </div>
    );
  }
}

export default SchoolInfo;
