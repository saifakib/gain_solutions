import { Link } from 'react-router-dom'

function SingleStudent({ student }) {

    return (

        <tr>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>
            <td>{student.dateOfBirth}</td>
            <td>
                {student.subjects.map(subj => (
                    <tr>{subj.name}</tr>
                ))}
            </td>
            <td>
                <Link to={`/student/edit/${student._id}`} className="btn btn-warning m-2 px-4">Edit</Link>
                <Link to={`/student/delete/${student._id}`} className="btn btn-danger ">Delete</Link>
            </td>
        </tr>
    );
}

export default SingleStudent;
