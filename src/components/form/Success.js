import React from "react";

function Success({
  email,
  username,
  firstName,
  lastName,
  address,
  contact,
  cardNumber,
  cardName,
  validthru,
  cvv,
  setStep,
}) {
  return (
    <div className="col-12 d-flex justify-content-center">
      <div>
        <div style={{ width: "20rem" }}>
          <h3 className="text-center mb-5">Details</h3>
          <div>
            <h5 className="mb-3">
              <strong>Email: </strong>
              {email}
            </h5>
            <h5 className="mb-3">
              <strong>UserName:</strong> {username}
            </h5>
            <h5 className="mb-3">
              <strong>First Name: </strong>
              {firstName}
            </h5>
            <h5 className="mb-3">
              <strong>Last Name:</strong> {lastName}
            </h5>
            <h5 className="mb-3">
              <strong>Address:</strong> {address}
            </h5>
            <h5 className="mb-3">
              <strong>Contact:</strong> {contact}
            </h5>
            <h5 className="mb-3">
              <strong>Card Number:</strong> {cardNumber}
            </h5>

            <h5 className="mb-3">
              <strong>Card Name: </strong>
              {cardName}
            </h5>
            <h5 className="mb-3">
              <strong>Valid Thru: </strong>
              {validthru}
            </h5>
            <h5 className="mb-3">
              <strong>cvv:</strong> {cvv}
            </h5>
          </div>
          <div className="row">
            <button
              className="btn btn-success ml-auto mr-auto mt-2"
              onClick={() => setStep(1)}
            >
              OKAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
