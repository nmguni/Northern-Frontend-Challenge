import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import nextBtn from "../images/nextBtn.jpg";
import "../styles/App.scss";

const emailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      formErrors: {
        email: "",
      },
      correct: "",
      normalText: "Sign Up Now",
      value: "Your Interests",
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (formValid(this.state)) {
      this.setState({ normalText: "Submitting..." });
      setTimeout(() => {
        this.props.history.push("/success");
      }, 2000);

      console.log(`
      ----Form Submitted ----
      Email: ${this.state.email}
      Position: ${this.state.value}
    `);
    } else {
      console.error("EMAIL INVALID");
    }
  };

  handleSelectChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Please enter a valid email address.";
        break;

      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1 className="form-title">INTERNSHIP SIGNUP FORM</h1>
          <span className="horizontalLine"></span>
          <p className="form-description">
            Prepare for your career with a Project Management, Web-Development,
            Graphic design, or Digital Marketing Internship at Northern.
          </p>
          <form noValidate>
            <div style={{ height: "18px" }}>
              {" "}
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="form-inputs">
              <div className="form-email">
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Your Email Address *"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
              </div>
              {/* dropdown */}
              <div className="dropdown">
                <select
                  value={this.state.value}
                  onChange={this.handleSelectChange}
                  className="dropdown-form"
                >
                  <option value="interests">Your Interests</option>
                  <option value="Development">Development</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
            </div>

            <div className="form-signup-btn">
              <button className="form-btn" onClick={this.handleSubmit}>
                {" "}
                <Link to="/">
                  {this.state.normalText}
                  <img src={nextBtn} style={{ width: "15px" }} alt="Disabled" />
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UserDetails);
