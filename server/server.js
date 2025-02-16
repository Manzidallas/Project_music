const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5400
const fs = require('fs')
const multer = require('multer')
const path = require('path')
const URL = "mongodb://127.0.0.1:27017/music"
const Music = require('./models/music')
app.set('view engine', 'ejs');
mongoose.connect(URL)
.then(()=> console.log("Connected succesfully to the database"))
.catch((err)=>{
    console.log("Err occured trying to connect to mongodb", err)
})

app.use(express.json())

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'music/')
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }

})

const upload = multer({storage: storage})

app.post('/music/new', upload.single('file'), async (req, res)=>{
    
    try {
        
        const { title, artist, description } = req.body
        
        if(!title || !artist || !description){
            console.log("Hello", title, artist, description)
            return res.status(400).json({message: "All fields are required including also the file"})
        }



        const newMusic = new Music({
            title:title,
            artist:artist,
            // image:image,
            description:description,
            audio: req.file.path
        })

        await newMusic.save();

        res.status(201).send("The song is inserted")

    } catch (error) {
        res.status(500).json({message : "There is server error" })
        console.log(error)
    }

})


app.get('/music/:id', async (req, res) => {
    try {
        // Find the song by its ID and select only the 'audio' field
        const music = await Music.findById(req.params.id).select('audio'); // Use 'await' for async operation

        // Check if the song exists
        if (!music) {
            return res.status(404).json({ message: 'Music file was not found' });
        }

        // Resolve the absolute path to the file
        const filePath = path.resolve(music.audio); // Assuming 'audio' is already an absolute path

        // Ensure the file exists before sending it
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ message: 'File not found on server' });
        }

        // Set appropriate headers for streaming audio files
        res.setHeader('Content-Type', 'audio/mpeg'); // Adjust MIME type based on your file format
        res.setHeader('Content-Disposition', `inline; filename="${path.basename(filePath)}"`);

        // Stream the file to the client
        fs.createReadStream(filePath).pipe(res);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }})

app.get('/music/' , (req,res)=>{
    res.render('index')
})

app.get('/listen/', (req, res)=>{
    res.render('listen')
})









app.post(('/user/register'), (req, res)=>{
    const {fname,lname, uname , email, password} = req.body
    try {
        
    } catch (error) {
        
    }
})




app.get('/', (req, res)=>{
    res.send("Hello Bithces");
})




















app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`)
})