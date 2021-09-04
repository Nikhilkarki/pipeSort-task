import React from "react";

function PersonalDetails({
  step,
  previous,
  next,
  firstname,
  setFirstName,
  lastName,
  setLastName,
  address,
  setAddress,
  contact,
  setContact,
}) {
  return (
    <div className="col-12 d-flex justify-content-center">
      <div>
        <form className="" style={{ width: "20rem" }}>
          <h4>Step/{step}: Personal Details</h4>
          <div className="form-group mt-1">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="first name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Enter full Address"
              rows="4"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              className="form-control"
              placeholder="Mobile No."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            ></input>
          </div>
          <div className="d-flex ">
            <button
              className="btn btn-success mr-1"
              style={{ width: "50%" }}
              onClick={previous}
            >
              PREVIOUS
            </button>
            <button
              className="btn btn-primary"
              style={{ width: "50%" }}
              onClick={next}
            >
              NEXT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetails;
