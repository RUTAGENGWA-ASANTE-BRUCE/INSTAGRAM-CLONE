import Express from "express"
import Mongoose from "mongoose"
import Cors from "cors"
import Photos from "./dbPhoto.js"
import Videos from "./dbVideo.js"
import Follows from "./dbFollowed.js"
import Suggestions from "./dbSuggestion.js"
import myprofile from "./dbPersonal.js"
import multer from "multer"
import Pusher from "pusher"
import sendermessage from "./dbSender.js"
import dbPersonal from "./dbPersonal.js"

const storage = multer.diskStorage({
    destination: (req, file, callback) =>
    {
        callback(null, "C:/Users/pc/Pictures/Camera Roll/FAMILY")
    },
    filename: (req, file, callback) =>
    {
        callback(null, file.originalname)
    }
})
const uploads = multer({ storage: storage })
//App config
const app = Express()
const port = process.env.PORT || 9005
const connection_url = "mongodb://localhost/instagram-clone"

const pusher = new Pusher({
    appId: "1067105",
    key: "1d4d1ef9b440596935fa",
    secret: "d7ec0a8094276678dd5b",
    cluster: 'eu',
    encrypted: true,
})
const db = Mongoose.connection;
db.once("open", () =>
{
    console.log("DB connected")
    const msgCollection = db.collection("sendermessages")
    const changeStream = msgCollection.watch()


})
//Middlewares
app.use(Express.json())
app.use(Cors())
//dbConfig
Mongoose.connect(connection_url)
//API Endpoits
app.get("/", (req, res) => res.status(200).send("Hello World"))

app.post("/instagram/photos", uploads.single("myImage"), (req, res) =>
{
    const photoSpace = req.body

    Photos.create(photoSpace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
    //@ts-ignore
    const newPhoto = new Photos({ myImage: req.file.originalname })

    newPhoto.save().then(() => { res.json("New photo created") }).catch((err) => { res.status(201).send(err) })

})

app.get("/instagram/photos", (req, res) =>
{
    Photos.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})


app.post("/instagram/videos", (req, res) =>
{
    const videoSpace = req.body

    Videos.create(videoSpace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/instagram/videos", (req, res) =>
{
    Videos.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.post("/instagram/follows", async (req, res) =>
{
    const followsPlace = req.body
    await Follows.create(followsPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })


})

app.get("/instagram/follows", async (req, res) =>
{
    Follows.find({}, async (err, data) =>
    {
        var number = 0
        var info = [];
        while (number < data.length) {
            info.push(data[number]._id)
            number++
        }
        let user = await dbPersonal.findById("61ee5e0e6dacbd528863c544");
        user.followers = info;
        await user.save((err, acc) =>
        {
            if (err) console.log(err.message);
            return res.status(200).json({ account: acc });
        })


    })


})

app.get("/instagram/follows/:userId", async (req, res) =>
{
    const userId = req.params.userId;
    await Follows.findOne({ userId: userId }, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).json(data) }
    })

})

app.post("/instagram/suggestions", (req, res) =>
{
    const suggestionsPlace = req.body

    Suggestions.create(suggestionsPlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/instagram/suggestions", (req, res) =>
{
    Suggestions.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.post("/instagram/myprofile", (req, res) =>
{
    const myProfileSpace = req.body
    const { old: oldData, new: newData } = req.body
    myprofile.create(myProfileSpace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })


})


app.post("/instagram/loggedIn/:userId", async (req, res) =>
{
    const currentUser = await dbPersonal.findOne({ _id: req.params.userId })

    if (!currentUser) return res.status(400).send({ error: "Account doesn't exist" });
    let followers = currentUser.followers;

    followers.map((f, i) =>
    {
        if (f == req.body.followerId) followers.filter((f, i) => f !== req.body.followerId);
        else { followers.push(req.body.followerId) }
    })
    currentUser.followers = followers

    await currentUser.save((err, user) =>
    {
        if (!err) return res.status(200).send(user)
        res.status(500).send(err)
    })

})
app.get("/instagram/myprofile", (req, res) =>
{
    myprofile.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.post("/instagram/sendermessages", (req, res) =>
{
    const senderMessagePlace = req.body

    sendermessage.create(senderMessagePlace, (err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})

app.get("/instagram/sendermessages", (req, res) =>
{
    sendermessage.find((err, data) =>
    {
        if (err) { res.status(500).send(err) }
        else { res.status(201).send(data) }
    })
})
//listener
app.listen(port, () => console.log(`listening on port ${port}`))