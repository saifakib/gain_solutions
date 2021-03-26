/**
 * Student Controller
 */

const { Student, Subject } = require('../model')

exports.getAllStudentController = async (req, res) => {
    try {
        const students = await Student.find({})
            .populate('subjects', 'name')
        res.status(200).json(students)
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.getSingleStudentController = async( req, res) => {
    const _id = req.params.id;
    try{
        const student = await Student.find({_id})
        res.status(200).json(student)
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.studentAddPostController = async (req, res) => {
    const { name, email, phone, dateOfBirth } = req.body;

    if (name && email && phone && dateOfBirth) {

        const newStudent = new Student({
            name,
            email,
            phone,
            dateOfBirth
        })

        try {
            await newStudent.save()
                .then(student => {
                    res.status(201)
                        .json(student)
                })
                .catch(err => {
                    res.status(502)
                        .json(err)
                })

        } catch (e) {
            res.status(501).json(e)
        }
    }
}

exports.studentUpdateController = async (req, res) => {
    const _id = req.params.id;
    const studentUpdate = {
        name,
        email,
        phone,
        dateOfBirth
    } = req.body

    try {
        await Student.findByIdAndUpdate({ _id }, { $set: studentUpdate })
            .then(student => {
                res.status(204).json({ msg: 'Updated' })
            })
            .catch(err => {
                res.status(502).json(err)
            })
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.studentDeleteController = async (req, res) => {
    const _id = req.params.id;
    try {
        await Student.findByIdAndDelete({ _id })
            .then(student => {
                res.json({
                    message: 'student Delete'
                })
            })
            .catch(err => {
                console.log(err);
            })
    } catch (e) {
        res.status(501).json(e)
    }
}