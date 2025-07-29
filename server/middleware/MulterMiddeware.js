 import multer from "multer";

// Store file in memory
const storage = multer.memoryStorage();

// Only allow PDF files
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

// Apply storage + fileFilter
const upload = multer({
  storage,
  fileFilter,
});

export default upload;
