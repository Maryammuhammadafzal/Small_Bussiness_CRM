import multer from "multer";
import { connectToDB } from "./db";
import { NextApiRequest, NextApiResponse } from "next";

connectToDB();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log(req);
    console.log(file);
    console.log(cb);
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

const uploadMiddleware = (fieldName: string) => {
  return async (
    req: NextRequest,
    res: NextResponse,
    next: () => void
  ) => {
    try {
      upload.array(fieldName)(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ err: err.message });
        }
        if (!req.file) {
          return res.status(400).json({ err: "Images are required" });
        }
        return req.file;
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Failed to upload images" });
    }
  };
};

export default uploadMiddleware;
