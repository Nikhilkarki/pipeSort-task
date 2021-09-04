import React, { useState } from "react";

import Back from "../Back";
import PaymentDetails from "./PaymentDetails";
import PersonalDetails from "./PersonalDetails";
import Success from "./Success";
import UserDetails from "./UserDetails";
function Form(props) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [cardNumber, setCardNumber] = useState();
  const [cardName, setCardName] = useState("");
  const [validthru, setValidThru] = useState();
  const [cvv, setCvv] = useState();

  function next() {
    setStep(step + 1);
  }

  function previous() {
    setStep(step - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStep(0);
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12 text-center title">Step Form</h1>
      </div>
      <div className="row">
        <Back setShowHome={props.setShowHome} />
      </div>
      {step === 1 ? (
        <div className="row mt-3">
          <UserDetails
            step={step}
            next={next}
            email={email}
            setEmail={setEmail}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
          />
        </div>
      ) : step === 2 ? (
        <div className="row mt-3">
          <PersonalDetails
            step={step}
            previous={previous}
            next={next}
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            address={address}
            setAddress={setAddress}
            contact={contact}
            setContact={setContact}
          />
        </div>
      ) : step === 3 ? (
        <div className="row mt-3">
          <PaymentDetails
            step={step}
            previous={previous}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            cardName={cardName}
            setCardName={setCardName}
            validthru={validthru}
            setValidThru={setValidThru}
            cvv={cvv}
            setCvv={setCvv}
            handleSubmit={handleSubmit}
          />
        </div>
      ) : (
        <div className="row mt-3">
          <Success
            email={email}
            username={username}
            password={password}
            firstName={firstName}
            lastName={lastName}
            address={address}
            contact={contact}
            cardNumber={cardNumber}
            cardName={cardName}
            validthru={validthru}
            cvv={cvv}
            setStep={setStep}
          />
        </div>
      )}
    </div>
  );
}

export default Form;
