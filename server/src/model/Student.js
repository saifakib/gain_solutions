
/**
 * Model: Student Model
 */

const { Schema, model } = require('mongoose')
const valid = require('validator')

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        trim: true,
        unique: true,
        validate: {
            validator: (email) => {
                return valid.isEmail(email)
            },
            message: `provided email is not valid email`
        },
        required: true
    },

    phone: {
        type: String,
        trim: true,
        required: true
    },

    dateOfBirth: {
        type: Date,
        required: true
    },

    subjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    }]
}, {
        timestamps: true
    }
)

const Student = model('Student', studentSchema)

module.exports = Student;