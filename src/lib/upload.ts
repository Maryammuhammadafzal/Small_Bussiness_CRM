import multer from "multer";
import { connectToDB } from "./db";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
connectToDB();

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now}-${file.fieldname}${ext}`);
  },
});

export const uploadMiddleware = (fieldname: string) => {
  const upload = multer({ storage });
  return (req: any, res: any, next: any) => {
    upload.array(fieldname)(req, res, (err) => {
      if (err) return res.status(400).json({ err: err.message });
      next();
    });
  };
};

// const runMiddleWare = (
//   req: NextApiRequest,
//   res: NextApiResponse,
//   fn: Function
// ) => {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result: any) => {
//       if (result instanceof Error) {
//         return reject(result);
//       }
//       return resolve(result);
//     });
//   });
// };

// Handle Images Upload
// const uploadMiddleware = (feildName: string) => {
//   const middleware = upload.array(feildName);

//   return async (req: NextApiRequest, res: NextApiResponse) {
//     try {
//       await runMiddleWare(req , res , middleware);

//       if(!req?.files || (Array.isArray(req?.files) && req?.files.length === 0)) {
// return res.status(400).json({err: "No Image Uploaded"});
//       }

//       const uploadedImages = req?.files;
//       return res.status(200).json({success: true , files : uploadedImages});

//     } catch (error: any) {
//       console.log(error);
//       return res.status(500).json({ error: error.message || "Upload failed" });
//     }
//   }
// };

// export default uploadMiddleware;
