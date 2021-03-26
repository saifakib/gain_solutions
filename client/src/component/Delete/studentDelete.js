import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from '../../utls/axios'

const DeleteStudent = ({ match }) => {

    useEffect(() => {
        axios.delete(`/student/delete/${match.params.id}`)
    })

    return (
        <Redirect to="/student"></Redirect>
    )
}

export default DeleteStudent;