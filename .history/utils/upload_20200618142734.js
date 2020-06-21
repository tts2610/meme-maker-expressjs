const multer = require("multer");
const path = require("path");

const pathToOriginal = path.join(__dirname, '../public/images/originals/')


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, pathToOriginal)
    },
    filename: function(req, file, cb) {
        const allow = ["image/jpg", "image/gif", "image/png"];
        if (!allow.includes(file.mimetype)) {
            return cb(new Error("file is not allowed", null))
        }
        cb(null, +Date.now() + '-' + file.originalname)
    }
})

var upload = multer({ storage: storage })

module.exports = upload.single("fileupload");