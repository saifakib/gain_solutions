import { useState, useEffect } from 'react'

function App() {

  const [students, setStudent] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {

    await fetch('http://localhost:8000/student')
      .then(response => response.json())
      .then(data => setStudent(data))
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 mt-5">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-around">
                <h5 className="card-title text-center d-block">Students List</h5>
                <input className="btn btn-primary" value="Add" /></div>

              <table className="table table-hover mt-5">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone)</th>
                    <th>Date of Birth</th>
                    <th>Subjects</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(st => (
                    <tr>
                      <td>{st.name}</td>
                      <td>{st.email}</td>
                      <td>{st.phone}</td>
                      <td>{st.dataOfBirth}</td>
                      <td>
                        { st.subjects.map(subj => (
                          <tr>{subj.name}</tr>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
