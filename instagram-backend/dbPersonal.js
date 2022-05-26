import Mongoose from "mongoose";

const profileSchema = new Mongoose.Schema({
        mainUserName: String,
        mainProfileName: String,
        mainProfileImage: String,
        followers: { type: [String], required: true },
        followings: [String]
})

export default Mongoose.model("myprofile", profileSchema)