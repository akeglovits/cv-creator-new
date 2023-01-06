import React, { Component } from "react";
import SchoolInfo from "./components/SchoolInfo";
import WorkInfo from "./components/WorkInfo";
import "./styles/App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
      schools: [
        {
          school: "",
          degree: "",
          grad: "",
        },
      ],
      jobs: [
        {
          company: "",
          position: "",
          tasks: "",
          startdate: "",
          enddate: "",
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addWork = this.addWork.bind(this);
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
        school: "",
        degree: "",
        grad: "",
      }),
    }));
  };

  addWork = () => {
    this.setState((state) => ({
      jobs: this.state.jobs.concat({
        company: "",
        position: "",
        tasks: "",
        startdate: "",
        enddate: "",
      }),
    }));
  };

  render() {
    const { schools, jobs, name, email, phone, address } = this.state;
    let schoolComponents = [];
    let workComponents = [];

    for (let i = 0; i < schools.length; i++) {
      schoolComponents.push(
        <SchoolInfo
          key={i}
          schoolId={i}
          school={schools[i]["school"]}
          degree={schools[i]["degree"]}
          grad={schools[i]["grad"]}
          handleChange={this.handleChange}
        />
      );
    }

    for (let i = 0; i < jobs.length; i++) {
      workComponents.push(
        <WorkInfo
          key={i}
          jobId={i}
          company={jobs[i]["company"]}
          position={jobs[i]["position"]}
          tasks={jobs[i]["tasks"]}
          startdate={jobs[i]["startdate"]}
          enddate={jobs[i]["enddate"]}
          handleChange={this.handleChange}
        />
      );
    }

    return (
      <div className="App">
        <div className="GeneralInfoSection">
          <div className="Header">General Info</div>
          <div className="GeneralInfo">
            <div className="Display">
              <div className="Name">{name}</div>
              <div className="Address">
                {address.street}, {address.city}, {address.state} {address.zip}
              </div>
              <div className="Email">{email}</div>
              <div className="Phone">{phone}</div>
            </div>
            <div className="Inputs">
              <form className="GeneralForm">
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => this.handleChange(1, e)}
                />
                <input
                  type="text"
                  id="street"
                  placeholder="123 Street Road"
                  value={address.street}
                  onChange={(e) => this.handleChange(1, e)}
                />
                <input
                  type="text"
                  id="city"
                  placeholder="New York City"
                  value={address.city}
                  onChange={(e) => this.handleChange(1, e)}
                />
                <input
                  type="text"
                  id="state"
                  placeholder="NY"
                  value={address.state}
                  onChange={(e) => this.handleChange(1, e)}
                />
                <input
                  type="text"
                  id="zip"
                  placeholder="12345"
                  value={address.zip}
                  onChange={(e) => this.handleChange(1, e)}
                />
                <input
                  type="text"
                  id="phone"
                  placeholder="123-456-7890"
                  value={phone}
                  onChange={(e) => this.handleChange(1, e)}
                />
                <input
                  type="email"
                  id="email"
                  placeholder="JohnDoe@email.com"
                  value={email}
                  onChange={(e) => this.handleChange(1, e)}
                />
              </form>
            </div>
          </div>
        </div>
        <div className="SchoolInfoSection">
          <div className="Header">Education</div>
          {schoolComponents}
          <button className="addEducation" onClick={this.addEducation}>
            Add Education
          </button>
        </div>
        <div className="WorkInfoSection">
          <div className="Header">Work Experience</div>
          {workComponents}
          <button className="addWork" onClick={this.addWork}>
            Add Work Experience
          </button>
        </div>
      </div>
    );
  }
}

export default App;
