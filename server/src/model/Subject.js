
/**
 * Model: Subject Model
 */

const { Schema, model } = require('mongoose')

const subjectSchema = new Schema({
    name: {
        type: String,
        maxlength: 30,
        required: true
    },

    students: [{
        type: Schema.Types.ObjectId,
        ref: 'Student'
    }]
}, {
        timestamps: true
    }
)

const Subject = model('Subject', subjectSchema)

module.exports = Subject;