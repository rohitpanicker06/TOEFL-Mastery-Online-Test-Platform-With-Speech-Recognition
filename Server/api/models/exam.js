const Mongoose = require('../app.js');

// created table Schema for todo 
const AdminTestSchema = new Mongoose.Schema({ 
    "id": {
    type : String,
    required: true
    },
    "title": {
        type : String,
        required: true,
        unique: true
    },
    "date" : {
        type : String,
        required: true
    },
    "type": {
        type: String,
        required: true
    },
    "createdAt": {
      type: String,
      required: true
    },
    "updatedAt": {
      type: String,
      required: true
  }
},
{
    versionKey: false
}
)

//AdminSchema.virtual('id', () => this._id.toHexString())
AdminTestSchema.set('toJSON', {virtuals: true})

const AdminTest =  Mongoose.model('Exams', AdminTestSchema);

module.exports = AdminTest;
