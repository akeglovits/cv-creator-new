import React, { Component } from "react";
import SchoolInfo from "./components/SchoolInfo";
import WorkInfo from "./components/WorkInfo";
import EditDiv from "./components/EditDiv";
import SubmitButton from "./components/SubmitButton";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "John Doe",
      email: "email@email.com",
      phone: "123-456-7890",
      address: {
        street: "123 Street Road",
        city: "New York City",
        state: "NY",
        zip: "12345",
      },
      schools: [
        {
          school: "Best School University",
          degree: "Bachelor's of Coolness",
          grad: "June 2022",
        },
      ],
      jobs: [
        {
          company: "Best Software Company",
          position: "Senior Software Developer",
          tasks:
            "Working on a bunch of stuff that's realted to developing software",
          startdate: "4/5/2020",
          enddate: "Present",
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addWork = this.addWork.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.finishEditing = this.finishEditing.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);

    document.body.style.backgroundColor = "#B6D7A8";
  }

  handleChange = (key, e) => {
    const addressinputs = ["street", "city", "state", "zip"];
    const schoolinputs = ["school", "degree", "grad"];
    const workinputs = ["company", "position", "tasks", "startdate", "enddate"];
    if (addressinputs.includes(e.target.id)) {
      this.setState({
        address: {
          ...this.state.address,
          [e.target.id]: e.target.value,
        },
      });
    } else if (schoolinputs.includes(e.target.id)) {
      const newschools = this.state.schools.map((school, i) => {
        if (i === key) {
          return {
            ...school,
            [e.target.id]: e.target.value,
          };
        } else {
          return school;
        }
      });

      this.setState({
        schools: newschools,
      });
    } else if (workinputs.includes(e.target.id)) {
      const newjobs = this.state.jobs.map((job, i) => {
        if (i === key) {
          return {
            ...job,
            [e.target.id]: e.target.value,
          };
        } else {
          return job;
        }
      });

      this.setState({
        jobs: newjobs,
      });
    } else {
      this.setState({
        [e.target.id]: e.target.value,
      });
    }
  };

  addEducation = () => {
    this.setState((state) => ({
      schools: this.state.schools.concat({
        school: "Best School University",
        degree: "Bachelor's of Coolness",
        grad: "June 2022",
      }),
    }));
  };

  addWork = () => {
    this.setState((state) => ({
      jobs: this.state.jobs.concat({
        company: "Best Software Company",
        position: "Senior Software Developer",
        tasks:
          "Working on a bunch of stuff that's realted to developing software",
        startdate: "4/5/2020",
        enddate: "Present",
      }),
    }));
  };

  deleteEntry = (entryId, entryType) => {
    let entries = [];
    if (entryType === "school") {
      entries = this.state.schools;
    } else {
      entries = this.state.jobs;
    }

    const newEntries = entries.filter((entry, i) => {
      return i !== entryId;
    });
    if (entryType === "school") {
      this.setState({
        schools: newEntries,
      });
    } else {
      this.setState({
        jobs: newEntries,
      });
    }
  };

  toggleEdit = (e) => {
    e.target
      .closest(".InfoDiv")
      .querySelectorAll("span")
      .forEach((el) => {
        el.classList.toggle("hidden");
      });
    e.target
      .closest(".InfoDiv")
      .querySelectorAll("input")
      .forEach((el) => {
        el.classList.toggle("hidden");
      });

    e.target
      .closest(".InfoDiv")
      .querySelectorAll("button")
      .forEach((el) => {
        el.classList.toggle("hidden");
      });

    e.target
      .closest(".InfoDiv")
      .querySelector(".EditDiv")
      .classList.toggle("hidden");
  };

  startEditing = (e) => {
    if (
      !e.target.closest(".InfoDiv").classList.contains("editing") &&
      !e.target.classList.contains("SubmitButton")
    ) {
      e.target.closest(".InfoDiv").classList.toggle("editing");
      this.toggleEdit(e);
    }
  };

  finishEditing = (e) => {
    e.preventDefault();
    this.toggleEdit(e);
    e.target.closest(".InfoDiv").classList.toggle("editing");
  };

  toggleEditDiv = (e) => {
    if (!e.target.closest(".InfoDiv").classList.contains("editing")) {
      e.target
        .closest(".InfoDiv")
        .querySelector(".EditDiv")
        .classList.toggle("hidden");
    }
  };

  render() {
    const { schools, jobs, name, email, phone, address } = this.state;

    return (
      <div className="App">
        <div
          className="GeneralInfoSection InfoDiv"
          onClick={this.startEditing}
          onMouseEnter={this.toggleEditDiv}
          onMouseLeave={this.toggleEditDiv}
        >
          <div className="GeneralInfo">
            <form className="GeneralForm">
              <h1 className="Name">
                <span className="NameDisplay">{name}</span>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => this.handleChange(1, e)}
                  className="hidden"
                />
              </h1>
              <hr />
              <div className="ContactSection">
                <div className="Address">
                  <span className="StreetDisplay">{address.street}</span>
                  <input
                    type="text"
                    id="street"
                    placeholder="123 Street Road"
                    value={address.street}
                    onChange={(e) => this.handleChange(1, e)}
                    className="hidden"
                  />
                  ,<span className="CityDisplay">{address.city}</span>
                  <input
                    type="text"
                    id="city"
                    placeholder="New York City"
                    value={address.city}
                    onChange={(e) => this.handleChange(1, e)}
                    className="hidden"
                  />
                  ,<span className="StateDisplay">{address.state}</span>
                  <input
                    type="text"
                    id="state"
                    placeholder="NY"
                    value={address.state}
                    onChange={(e) => this.handleChange(1, e)}
                    className="hidden"
                  />
                  <span className="ZipDisplay">{address.zip}</span>
                  <input
                    type="text"
                    id="zip"
                    placeholder="12345"
                    value={address.zip}
                    onChange={(e) => this.handleChange(1, e)}
                    className="hidden"
                  />
                </div>
                <div className="Email">
                  <span className="EmailDisplay">{email}</span>
                  <input
                    type="email"
                    id="email"
                    placeholder="JohnDoe@email.com"
                    value={email}
                    onChange={(e) => this.handleChange(1, e)}
                    className="hidden"
                  />
                </div>
                <div className="Phone">
                  <span className="PhoneDisplay">{phone}</span>
                  <input
                    type="text"
                    id="phone"
                    placeholder="123-456-7890"
                    value={phone}
                    onChange={(e) => this.handleChange(1, e)}
                    className="hidden"
                  />
                </div>
              </div>
              <div className="buttonRow">
                <SubmitButton finishEditing={this.finishEditing} />
              </div>
            </form>
          </div>
          <EditDiv />
        </div>
        <div className="SchoolInfoSection">
          <h2 className="Header">Education</h2>
          {this.state.schools.map((s, i) => {
            return (
              <SchoolInfo
                key={i}
                schoolId={i}
                school={s.school}
                degree={s.degree}
                grad={s.grad}
                handleChange={this.handleChange}
                startEditing={this.startEditing}
                toggleEditDiv={this.toggleEditDiv}
                finishEditing={this.finishEditing}
                deleteEntry={this.deleteEntry}
              />
            );
          })}
          <div className="buttonRow">
            <button className="addEducation" onClick={this.addEducation}>
              Add Education
            </button>
          </div>
        </div>
        <div className="WorkInfoSection">
          <h2 className="Header">Work Experience</h2>
          {this.state.jobs.map((job, i) => {
            return (
              <WorkInfo
                key={i}
                jobId={i}
                company={job.company}
                position={job.position}
                tasks={job.tasks}
                startdate={job.startdate}
                enddate={job.enddate}
                handleChange={this.handleChange}
                startEditing={this.startEditing}
                toggleEditDiv={this.toggleEditDiv}
                finishEditing={this.finishEditing}
                deleteEntry={this.deleteEntry}
              />
            );
          })}
          <div className="buttonRow">
            <button className="addWork" onClick={this.addWork}>
              Add Work Experience
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
