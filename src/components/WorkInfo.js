import React, { Component } from "react";

class WorkInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company, position, tasks, startdate, enddate, handleChange } =
      this.props;
    return (
      <div className="WorkInfo">
        <div className="Display">
          <div className="Company">{company}</div>
          <div className="Position">{position}</div>
          <div className="Tasks">{tasks}</div>
          <div className="Dates">
            {startdate} - {enddate}
          </div>
        </div>
        <div className="Inputs">
          <form className="WorkForm">
            <input
              type="text"
              id="company"
              placeholder="Company"
              value={company}
              onChange={(e) => handleChange(this.props.jobId, e)}
            />
            <input
              type="text"
              id="position"
              placeholder="Position"
              value={position}
              onChange={(e) => handleChange(this.props.jobId, e)}
            />
            <input
              type="text"
              id="tasks"
              placeholder="Tasks"
              value={tasks}
              onChange={(e) => handleChange(this.props.jobId, e)}
            />
            <input
              type="text"
              id="startdate"
              placeholder="Start Date"
              value={startdate}
              onChange={(e) => handleChange(this.props.jobId, e)}
            />
            <input
              type="text"
              id="enddate"
              placeholder="End Date"
              value={enddate}
              onChange={(e) => handleChange(this.props.jobId, e)}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default WorkInfo;
