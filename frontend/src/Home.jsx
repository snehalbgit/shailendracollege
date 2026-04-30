import React, { useState } from 'react';

export default function Home() {

  const [showForm, setShowForm] = useState(false);
  const [rollno, setRollno] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");

  const submitform = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/Home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rollno,
        name,
        age,
        state
      })
    })
    .then(res => res.text())
    .then(data => alert(data))
    .catch(err => console.log(err));

    // Clear form
    setRollno("");
    setName("");
    setAge("");
    setState("");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Management</h2>

      <div className="text-center">
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          Add Student
        </button>
      </div>

      {showForm && (
        <div className="card mt-4 p-4">
          <form onSubmit={submitform}>
            
            <div className="mb-3">
              <label className="form-label">Roll No</label>
              <input
                type="number"
                className="form-control"
                value={rollno}
                onChange={(e) => setRollno(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>

            <button className="btn btn-success" type="submit">
              Submit
            </button>

          </form>
        </div>
      )}
    </div>
  );
}