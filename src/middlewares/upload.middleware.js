import multer from "multer";
import path from "path"

//ใช้memory เพื่อเก็บไฟล์ในหน่วยความจำชั่วคราว
const storage = multer.memoryStorage()

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp|avif/;

    const extname = allowedTypes.test(
        path.extname( file.originalname ).toLowerCase()
    )

    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true); //อนุญาตให้อัพโหลด
    }else {
        cb(new Error("รองรับเฉพาะไฟล์ jpeg, jpg, png, gif, webp,avif ")),false;
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 5 * 1024 * 1024, //จำกัดขนาดไฟล์ 5mb
        files: 10,
    },
    fileFilter: fileFilter,
});

export default upload;