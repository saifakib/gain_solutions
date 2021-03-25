/**
 * Student Routes
 */

const router = require('express').Router()
const { studentController } = require('../controller')

const {
    getAllStudentController,
    studentAddPostController,
    studentUpdateController,
    studentDeleteController
} = studentController

router.get('/', getAllStudentController)
router.post('/add', studentAddPostController)
router.put('/update/:id', studentUpdateController)
router.delete('/delete/:id', studentDeleteController)

module.exports = router;