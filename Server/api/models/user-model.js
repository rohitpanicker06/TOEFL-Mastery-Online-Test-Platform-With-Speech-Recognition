const Mongoose = require('../app.js');

// created table Schema for todo 
const UserSchema = new Mongoose.Schema({
    "firstName": {
        type : String,
        required: "Enter First name"
    },
    "lastName": {
        type : String,
        required: "Enter LastName"
    },
    "password" : {
        type : String,
        required: "Enter Password"
    },
    "email": {
        type: String,
        default: "Enter emails"
    },
},
{
    versionKey: false
}
)

//UserSchema.virtual('id', () => this._id.toHexString())
UserSchema.set('toJSON', {virtuals: true})

const User =  Mongoose.model('Users', UserSchema);

module.exports = User;