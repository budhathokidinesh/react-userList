import React, { useState } from "react";

export const UserForm = ({ addUser }) => {
  // using the state
  const [user, setUser] = useState({});
  // grabing the data from form
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };
  return (
    <div className="w-50 shadow-lg p-3 m-auto mt-5 rounded">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row g-2">
          <div className="col-md-3">
            <select
              name="gender"
              id="inputState"
              className="form-select"
              required
              defaultValue=""
              onChange={handleOnChange}
            >
              <option value={""}>Choose...</option>
              <option value={"M"}>Male</option>
              <option value={"F"}>Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="User Name"
              aria-label="User Name"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};
