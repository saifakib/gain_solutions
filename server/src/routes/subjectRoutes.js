/**
 * Subject Routes
 */

const router = require('express').Router()
const { subjectController } = require('../controller')

const {
    getAllSubjectController,
    getSingleSubjectController,
    subjectAddPostController,
    subjectUpdateController,
    assingSubjectToStudents,
    subjectDeleteController,
} = subjectController

router.get('/', getAllSubjectController)
router.get('/:id', getSingleSubjectController)
router.post('/add', subjectAddPostController)
router.put('/update/:id', subjectUpdateController)
router.patch('/assign/:id', assingSubjectToStudents)
router.delete('/delete/:id', subjectDeleteController)


module.exports = router;