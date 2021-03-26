import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from '../../utls/axios'

const DeleteSubject = ({ match }) => {

    useEffect(() => {
        axios.delete(`/subject/delete/${match.params.id}`)
    })

    return (
        <Redirect to="/subject"></Redirect>
    )
}

export default DeleteSubject;