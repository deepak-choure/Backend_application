//middleware for handling multipart/form-data, which is primarily used for uploading files.
//should be used only on necessary routes, not as global mmiddleware
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

export { upload };
