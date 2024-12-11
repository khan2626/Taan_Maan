const xlsx = require("xlsx");

const fileUpload = async (req, res) => {
  try {
    const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    req.session.fileData = sheetData;
    res.status(200).json({
      preview: sheetData.slice(0, 5),
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ meessage: "Error in fileUpload controller" }, error);
  }
};

module.exports = fileUpload;
