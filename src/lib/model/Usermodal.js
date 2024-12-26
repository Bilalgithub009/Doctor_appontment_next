import mongoose, { Mongoose } from "mongoose";


const { Schema } = mongoose;

const userschema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    picture: String,
    role: { type: String, default: "user", enum: ['user', 'doctor', 'admin'] },
    doctorInfo: {
        fees: Number,
        hospital: String,
        time: String,
        bio: String,
        specialization: String,
        gender: String,

    }
});

export const UserModel = mongoose.models.user || mongoose.model("user", userschema);
