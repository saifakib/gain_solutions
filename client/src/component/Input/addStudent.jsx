import { useForm } from "react-hook-form";
import axios from '../../utls/axios'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

function AddStudent() {
    const [ confirm, setConfirm ] = useState(false)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => postData(data);

    const postData = (data) => {
        axios.post('/student/add', data)
        setConfirm(true)
    }


    return confirm ? (
        <Redirect to="/student"></Redirect>
    ) :
        (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 row">
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-6">
                        <input name="name" id="name" className="form-control" ref={register({ required: true })} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-6">
                        <input name="email" id="email" className="form-control" ref={register({ required: true })} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-6">
                        <input name="phone" id="phone" className="form-control" ref={register({ required: true })} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="dateOfBirth" className="col-sm-2 col-form-label">Date of Birth</label>
                    <div className="col-sm-6">
                        <input name="dateOfBirth" type="date" id="dateOfBirth" className="form-control" ref={register({ required: true })} />
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        )
}

export default AddStudent;