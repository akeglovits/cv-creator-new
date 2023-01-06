import React, { Component } from "react";
import EditDiv from "./EditDiv";
import ButtonRow from "./ButtonRow";

class WorkInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      company,
      position,
      tasks,
      startdate,
      enddate,
      handleChange,
      startEditing,
      toggleEditDiv,
    } = this.props;
    return (
      <div
        className="WorkInfo InfoDiv"
        onClick={startEditing}
        onMouseEnter={toggleEditDiv}
        onMouseLeave={toggleEditDiv}
      >
        <form className="WorkForm">
          <div className="Company">
            <span className="CompanyDisplay">{company}</span>
            <input
              type="text"
              id="company"
              placeholder="Company"
              value={company}
              onChange={(e) => handleChange(this.props.jobId, e)}
              className="hidden"
            />
          </div>
          <div className="Dates">
            <span className="StartDateDisplay">{startdate}</span>
            <input
              type="text"
              id="startdate"
              placeholder="Start Date"
              value={startdate}
              onChange={(e) => handleChange(this.props.jobId, e)}
              className="hidden"
            />{" "}
            - <span className="EndDateDisplay">{enddate}</span>
            <input
              type="text"
              id="enddate"
              placeholder="End Date"
              value={enddate}
              onChange={(e) => handleChange(this.props.jobId, e)}
              className="hidden"
            />
          </div>
          <div className="Position">
            <span className="PositionDisplay">{position}</span>
            <input
              type="text"
              id="position"
              placeholder="Position"
              value={position}
              onChange={(e) => handleChange(this.props.jobId, e)}
              className="hidden"
            />
          </div>
          <div className="Tasks">
            <span className="TasksDisplay">{tasks}</span>
            <input
              type="text"
              id="tasks"
              placeholder="Tasks"
              value={tasks}
              onChange={(e) => handleChange(this.props.jobId, e)}
              className="hidden"
            />
          </div>
          <ButtonRow
            finishEditing={this.props.finishEditing}
            deleteEntry={this.props.deleteEntry}
            entryId={this.props.jobId}
            entryType="job"
          />
        </form>
        <EditDiv />
      </div>
    );
  }
}

export default WorkInfo;
