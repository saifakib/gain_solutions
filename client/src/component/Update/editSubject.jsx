import { useForm } from "react-hook-form";
import axios from '../../utls/axios'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

function EditSubject({ match }) {
    const [confirm, setConfirm] = useState(false)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => updateData(data);

    const updateData = (data) => {
        axios.put(`/subject/update/${match.params.id}`, data)
        setConfirm(true)
    }

    return confirm ? (
        <Redirect to="/subject"></Redirect>
    ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 row">
                    <label for="name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-6">
                        <input name="name" id="name" className="form-control" ref={register({ required: true })} />
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Update" />
            </form>
        )
}

export default EditSubject;