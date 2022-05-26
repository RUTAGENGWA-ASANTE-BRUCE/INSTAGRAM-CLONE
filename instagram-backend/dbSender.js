import Mongoose from "mongoose";

const senderMsgSchema = new Mongoose.Schema({
    message: String,

})

export default Mongoose.model("sendermessage", senderMsgSchema);