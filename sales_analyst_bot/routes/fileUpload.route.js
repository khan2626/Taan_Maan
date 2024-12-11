const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(xlsx|xls)$/)) {
      return cb(new Error("Only Excel files are allowed"), false);
    }
    cb(null, true);
  },
});

router.post("/upload", upload.single("file"), (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "There's no file uploaded" });
    }

    const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    req.session.fileData = sheetData;
    res.status(200).json({
      preview: sheetData.slice(0, 5),
      message: "File uploaded successfully",
    });
    console.log("file upload success");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error in fileUpload" }, error);
  }
});

module.exports = router;
