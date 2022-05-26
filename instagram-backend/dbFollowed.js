import Mongoose from "mongoose";

const followedSchema = new Mongoose.Schema({
    followedProfileName: String,
    followedProfilePicture: String,
    userId: Mongoose.SchemaTypes.ObjectId
})

export default Mongoose.model("Follows", followedSchema)