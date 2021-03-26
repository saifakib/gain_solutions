import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utls/axios'

function Subject() {

  const [subjects, setSubject] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      let response = await axios.get('/subject')
      setSubject(response.data)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-around">
          <h5 className="card-title text-center d-block">Subjects List</h5>
          <Link to="/subject/add" className="btn btn-primary">Add Subject</Link>
        </div>

        <table className="table table-hover mt-5">
          <thead>
            <tr>
              <th>Subjects</th>
              <th>Students</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map(subj => (
              <tr>
                <td>{subj.name}</td>
                <td>
                  {subj.students.map(student => (
                    <tr>{student.name}</tr>
                  ))}
                </td>
                <td>
                  <Link to={`/subject/edit/${subj._id}`} className="btn btn-warning m-2 px-4">Edit</Link>
                  <Link to={`/subject/delete/${subj._id}`} className="btn btn-danger m-2">Delete</Link>
                  <Link to={`/assign/subject/${subj._id}`} className="btn btn-secondary">Assign</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Subject;
