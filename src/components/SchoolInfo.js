import React, { Component } from "react";

class SchoolInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school, degree, grad, handleChange } = this.props;
    return (
      <div className="SchoolInfo">
        <div className="Display">
          <div className="School">{school}</div>
          <div className="Grad">{grad}</div>
          <div className="Degree">{degree}</div>
        </div>
        <div className="Inputs">
          <form className="SchoolForm">
            <input
              type="text"
              id="school"
              placeholder="School"
              value={school}
              onChange={(e) => handleChange(this.props.schoolId, e)}
            />
            <input
              type="text"
              id="grad"
              placeholder="Grad Date"
              value={grad}
              onChange={(e) => handleChange(this.props.schoolId, e)}
            />
            <input
              type="text"
              id="degree"
              placeholder="Degree"
              value={degree}
              onChange={(e) => handleChange(this.props.schoolId, e)}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SchoolInfo;
