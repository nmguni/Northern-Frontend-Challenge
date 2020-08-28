import React from "react";
import "../styles/App.scss";

const Success = () => {
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="form-title">INTERNSHIP SIGNUP FORM</h1>
        <span className="horizontalLine"></span>
        <h3 className="thankYou-msg">Thanks for your interest!</h3>
        <p className="form-description">
          We will review your application and contact you for additional
          information should your background and experience meet the
          requirements of one of our openings.
        </p>
      </div>
    </div>
  );
};

export default Success;
