import React from "react";

const Advice = ({ advice, fetchAdvice }) => {
  return (
    <div className="container">
      <p id="ad">ADVICE #{advice.id}</p>
      <div className="advice-container">
        { advice ? <p>"{advice.advice}"</p> : <p>"It is easy to sit up and take notice, what's difficult is getting up and taking action"</p>}
      </div>
      <img
        src="/images/pattern-divider-mobile.svg"
        alt=""
        className="mbl-divider"
      />
      <img
        src="/images/pattern-divider-desktop.svg"
        alt=""
        className="dktp-divider"
      />
      <div className="btn" onClick={fetchAdvice}>
        <img src="/images/icon-dice.svg" alt="roll" className="dice" />
      </div>
    </div>
  );
};

export default Advice;
