
import { useState, useEffect } from 'react'
import axios from '../../utls/axios'
import { Redirect } from 'react-router-dom'

const SubjectAssign = ({ match }) => {

    const [students, setStudent] = useState([])
    const [confirm, setConfirm] = useState(false)
    const [checkStd, setCheckStd] = useState([])

    useEffect(() => {
        fetchStudents()
    }, [])

    const fetchStudents = async () => {
        try {
            let response = await axios.get('/student')
            let data = response.data;
            setStudent(data)
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = (event) => {
        event.preventDefault()
        if (event.target.checked) {
            setCheckStd(...checkStd, event.target.value)
        } else {
            const check = checkStd.filter(s => s !== event.target.value)
            setCheckStd(check)
        }
    }

    const handleSubmit = () => {
        assignSubjectPost()
    }

    const assignSubjectPost = () => {
        axios.patch(`/subject/assign/${match.params.id}`, checkStd)
        setConfirm(true)

    }



return confirm ? (
    <Redirect to="/subject"></Redirect>
) : (
        <form onSubmit={handleSubmit}>
            {students.map(student => {
                <div className="form-check">
                    <input className="form-check-input"
                        type="checkbox"
                        value={student.name}
                        checked={checkStd.includes(`${student.name}`)}
                        onChange={handleChange}
                    />
                    <label className="form-check-label">
                        {student.name}
                    </label>
                </div>
            })}
            <input className="btn btn-primary" type="submit" value="Submit" />
        </form>

    )
}

export default SubjectAssign;