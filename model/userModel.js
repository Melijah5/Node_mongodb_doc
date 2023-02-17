import mongoos from 'mongoose'

const userSchema = mongoos.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    }

}, {
    timestamps: true
})

const Users = mongoos.model('Users', userSchema )
export default Users