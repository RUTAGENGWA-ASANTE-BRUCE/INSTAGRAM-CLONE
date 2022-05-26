import Mongoose from "mongoose";
const suggestionSchema = new Mongoose.Schema({
    smallProfileName: String,
    followStatus: String,
    smallProfilePicture: String
})

export default Mongoose.model("Suggestions", suggestionSchema)