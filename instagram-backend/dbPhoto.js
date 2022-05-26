import Mongoose from "mongoose";



const photoSchema = new Mongoose.Schema({
    photoProfileName: String,
    photoLocationNickName: String,
    photoLikedBy: String,
    photoProfilePicture: String,
    photoLikedByProfilePicture: String,
    myImage: String
})

export default Mongoose.model("Photos", photoSchema)