import React from "react";

function UserDetails({
  step,
  next,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
}) {
  return (
    <div className="col-12 d-flex justify-content-center">
      <div>
        <form className="" style={{ width: "20rem" }}>
          <h4>Step/{step}: Sign Up</h4>
          <div className="form-group mt-1">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="Password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button
            className="btn btn-primary"
            style={{ width: "inherit" }}
            onClick={next}
          >
            NEXT
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserDetails;
