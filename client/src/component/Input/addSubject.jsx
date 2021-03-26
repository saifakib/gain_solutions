import { useForm } from "react-hook-form";
import axios from '../../utls/axios'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'

function AddSubject() {
    const [confirm, setConfirm] = useState(false)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => postData(data);

    const postData = (data) => {
        axios.post('/subject/add', data)
        setConfirm(true)
    }

    return confirm ? (
        <Redirect to="/subject"></Redirect>
    ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 row">
                    <label for="name" className="col-sm-2 col-form-label">Subject Name</label>
                    <div className="col-sm-6">
                        <input name="name" id="name" className="form-control" ref={register({ required: true })} />
                    </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        )
}

export default AddSubject;