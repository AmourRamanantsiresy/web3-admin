import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve('uploads'));
  },
  filename: (req, file, cb) => {
    const filePath = req.params.fileId + path.extname(file.originalname);
    req.filePath = path.resolve(filePath);
    cb(null, filePath);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (mimeType && extName) return cb(null, true);
    cb(new Error('Only images (JPG, PNG) are allowed!'));
  },
});

export const fileUpload = upload.single('image');
