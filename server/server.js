const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.nii.gz')
    }
});

const upload = multer({ storage: storage });

// Serve files from the public directory
app.use(express.static('public'));

// Route for file conversion
app.post('/convert', upload.single('niftiFile'), (req, res) => {
    const filePath = req.file.path;
    const outputFilePath = filePath.replace('.nii.gz', '-converted.nii.gz');

    // Convert file using niimath
    exec(`niimath ${filePath} -add 0 ${outputFilePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Conversion error: ${error}`);
            return res.status(500).send('Conversion failed');
        }
        res.download(outputFilePath, 'converted.nii.gz');
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
