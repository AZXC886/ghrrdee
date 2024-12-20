const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// إعداد multer لتخزين الفيديوهات
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

// مسار رفع الفيديو
app.post('/upload', upload.single('video'), (req, res) => {
    res.send('تم تحميل الفيديو بنجاح!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
