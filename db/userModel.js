const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email: {},
    password: {},

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
    },
    
    password: {
        type: String,
        required: [true, "Password is required"],
        unique: false,},
        },);

        module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);