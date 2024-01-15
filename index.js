const express = require('express')
const app = express();
const students = require("./routers/students")
const users = require("./routers/users");
const checkAuth = require("./middlware");
const fileUpload = require('express-fileupload');
const {uploadFile} = require("@uploadcare/upload-client");

//  require('dotenv');

const port = 3000;

app.use(express.static('files'))
app.use(express.json())

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.post('/upload', function (req, res) {
    req.files.file.mv(`files/${req.files.file.name}`, (err) => {
        if (!err) res.send("file uploaded")
        else res.send(err);
    });
});

app.post('/v2/upload', async function (req, res) {
    const result = await uploadFile(req.files.file.data, {
        publicKey:process.env.PUBLICKEY,
        store: 'auto',
        metadata: {
            subsystem: 'uploader',
            pet: 'cat'
        }
    });
    res.send(result)
});

app.use("/api/v1/students", students);
app.use("/api/v1/users", users);

// app.get('/students', (req, res) => {
//     let data=getStudent()
//     res.send(data)
// });

// app.get('/students',
//     async (req, res) => {
//     await getStudent(req, res)
// });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
