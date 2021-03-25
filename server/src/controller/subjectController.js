/**
 * Subject Controller
 */

const { Subject, Student } = require('../model')

exports.getAllSubjectController = async (req, res) => {
    try {
        const subjects = await Subject.find({})
            .populate('students', 'name')
        res.status(200).json(subjects)
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.subjectAddPostController = async (req, res) => {
    const { name } = req.body;

    if (name) {
        const newSubject = new Subject({ name })
        try {
            await newSubject.save()
                .then(subj => {
                    res.status(201).json(subj)
                })
                .catch(err => {
                    res.status(502).json(err)
                })

        } catch (e) {
            res.status(501).json(e)
        }
    }
}

exports.subjectUpdateController = async (req, res) => {
    const _id = req.params.id;
    const { name } = req.body;

    try {
        await Subject.updateOne({ _id }, { name })
            .then(() => {
                res.status(204).json({
                    message: "subject Update Successfully"
                })
            })
            .catch(err => {
                res.status(502).json(err)
            })
    } catch (e) {
        res.status(501).json(e)
    }
}

exports.assingSubjectToStudents = async (req, res) => {
    const _id = req.params.id;
    const newStudents = req.body.students;

    try {
        newStudents.forEach(async(id) => {
            await Student.findOneAndUpdate({_id: id}, { $push: { subjects: _id }})
        })
        await Subject.findByIdAndUpdate({ _id }, { $push: { students: newStudents } })
            .then(() => {
                res.status(204)
            })
            .catch(err => {
                res.status(502).json(err)
            })

    } catch (e) {
        res.status(501).json(e)
    }
}

exports.subjectDeleteController = async (req, res) => {
    const _id = req.params.id;
    try {
        await Subject.findByIdAndDelete({ _id })
            .then(subj => {
                res.json({
                    message: 'Subject Delete'
                })
            })
            .catch(err => {
                console.log(err);
            })
    } catch (e) {
        res.status(501).json(e)
    }
}