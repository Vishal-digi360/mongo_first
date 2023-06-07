import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: true, default: " " },
})

const userModel = mongoose.model("User", UserSchema);

export default userModel;