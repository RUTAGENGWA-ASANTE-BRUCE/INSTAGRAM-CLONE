import Mongoose from "mongoose";

const videoSchema = new Mongoose.Schema({
    videoProfileName: String,
    videoLocationNickName: String,
    videoLikedBy: String,
    videoProfilePicture: String,
    videoLikedByProfilePicture: String,
    myVideo: String
})

export default Mongoose.model("Videos", videoSchema)