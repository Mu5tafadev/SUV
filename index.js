const express = require('express')
const app = express();
const stores = require("./routers/stores")
const users = require("./routers/users");
const Cars = require("./routers/cars");
const Booking = require("./routers/Booking");
const checkAuth = require("./middlware");
const fileUpload = require('express-fileupload');
const { uploadFile } = require("@uploadcare/upload-client");

//  require('dotenv');

const port = 3000;

app.use(express.static('files'))
app.use(express.json())

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.get('/', (req, res) => {
    res.send('Hello World mustafa!')
});

app.post('/upload', function (req, res) {
    req.files.file.mv(`files/${req.files.file.name}`, (err) => {
        if (!err) res.send("file uploaded")
        else res.send(err);
    });
});

app.post('/v2/upload', async function (req, res) {
    const result = await uploadFile(req.files.file.data, {
        publicKey: process.env.PUBLICKEY,
        store: 'auto',
        metadata: {
            subsystem: 'uploader',
            pet: 'cat'
        }
    });
    res.send(result)
});

app.use("/api/v1/stores", stores);
app.use("/api/v1/users", users);
app.use("/api/v1/cars", Cars);
app.use("/api/v1/Booking", Booking);

// app.get('/stores', (req, res) => {
//     let data=getStore()
//     res.send(data)
// });

// app.get('/stores',
//     async (req, res) => {
//     await getStore(req, res)
// });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
