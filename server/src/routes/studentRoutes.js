/**
 * Student Routes
 */

const router = require('express').Router()
const { studentController } = require('../controller')

const {
    getAllStudentController,
    getSingleStudentController,
    studentAddPostController,
    studentUpdateController,
    studentDeleteController
} = studentController

router.get('/', getAllStudentController)
router.get('/:id', getSingleStudentController)
router.post('/add', studentAddPostController)
router.put('/update/:id', studentUpdateController)
router.delete('/delete/:id', studentDeleteController)

module.exports = router;