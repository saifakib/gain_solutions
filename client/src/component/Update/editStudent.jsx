import { useForm } from "react-hook-form";
import axios from '../../utls/axios'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

function EditStudent({ match }) {
    const [student, setStudent] = useState([])
    const [confirm, setConfirm] = useState(false)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => updateData(data);

    const updateData = (data) => {
        axios.put(`/student/update/${match.params.id}`, data)
        setConfirm(true)
    }

    useEffect(() => {
        getsingleStudentData()
    },[])

    const getsingleStudentData = async() => {
        try {
            let response = await axios.get(`/student/${match.params.id}`)
            let data = response.data;
            setStudent(data)
        } catch (e) {
            console.log(e)
        }
    }

    return confirm ? (
        <Redirect to="/student"></Redirect>
    ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 row">
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-6">
                        <input name="name" id="name" value={student.name} className="form-control" ref={register} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6">
                        <input name="email" id="email"  value={student.email} className="form-control" ref={register} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-6">
                        <input name="phone" id="phone" value={student.phone} className="form-control" ref={register} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="dateOfBirth" className="col-sm-2 col-form-label">Date of Birth</label>
                    <div className="col-sm-6">
                        <input name="dateOfBirth" type="date" id="dateOfBirth" value={student.dateOfBirth} className="form-control" ref={register} />
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Update" />
            </form>
        )
}

export default EditStudent;