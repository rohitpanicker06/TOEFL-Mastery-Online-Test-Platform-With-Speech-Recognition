const Mongoose = require('../app.js');

// created table Schema for todo 
const AdminExamSchema = new Mongoose.Schema({
    "id": {
        type : String,
        required: true
    },
    "title": {
        type : String,
        required: true
    },
    "date" : {
        type : String,
        required: true
    },
    "type": {
        type: String,
        required: true
    },
},
{
    versionKey: false
}
)

//AdminSchema.virtual('id', () => this._id.toHexString())
AdminExamSchema.set('toJSON', {virtuals: true})

const AdminExam =  Mongoose.model('Manage_Exams', AdminExamSchema);

module.exports = AdminExam;