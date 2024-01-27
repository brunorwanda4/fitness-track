import mongoose  from 'mongoose';


const userSchema = new mongoose.Schema (
    {
        name : {
            type : String,
            required : true,
            unique : true,
        },
        username : {
            type: String,
            required : true,
            unique : true,
        },
        email : {
            type: String,
            required : true,
            unique : true,
        },
        phoneNumber : {
            type: String,
            required : true,
        },
        hashedPassword : {
            type: String,
            required : true,
        },
        goals : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref : "Goals"
            }
        ]
    }, 
    {
        timestamps : true,
    }
)

const User = mongoose.models.User || mongoose.model("User" , userSchema);

export default User