/**
 * Subject Routes
 */

const router = require('express').Router()
const { subjectController } = require('../controller')

const { 
    getAllSubjectController,
    subjectAddPostController,
    subjectUpdateController,
    assingSubjectToStudents,
    subjectDeleteController,
} = subjectController

router.get('/', getAllSubjectController)
router.post('/add', subjectAddPostController)
router.put('/update/:id', subjectUpdateController)
router.patch('/assign/:id', assingSubjectToStudents)
router.delete('/delete/:id', subjectDeleteController)


module.exports = router;