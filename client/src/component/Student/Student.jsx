import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utls/axios'
import SingleStudent from './singleStudent'

function Student() {

    const [students, setStudent] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            let response = await axios.get('/student')
            setStudent(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    return (

        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-around">
                    <h5 className="card-title text-center d-block">Students List</h5>
                    <Link to="/student/add" className="btn btn-primary">Add Student</Link>
                </div>

                <table className="table table-hover mt-5">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone)</th>
                            <th>Date of Birth</th>
                            <th>Subjects</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(st => (<SingleStudent student={st} />))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Student;
