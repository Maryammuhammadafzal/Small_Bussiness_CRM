import { connectToDB } from "@/lib/db";
import Product from "@/models/Product";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import bodyParser from "body-parser";
import { uploadMiddleware } from "@/lib/upload";

export const config = {
  api: {
    bodyParser: false,
  },
};

export const handler = async (req: any, res: any) => {
  // Check the Api Method
  if (req.method !== "POST") {
    return res.status(400).json({ message: "Only Post Method is allowed" });
  }

  // Connect to DB
  await connectToDB();

  uploadMiddleware("product_images")(req, res, async (err: any) => {
    if (err)
      return res
        .status(400)
        .json({ message: "File upload error", error: err.message });
    try {
      const body = await req.body();
      console.log(body);

      const newProduct = await Product.create(body);

      return NextResponse.json(
        {
          message: "Product added successfully!",
          data: newProduct,
        },
        { status: 201 }
      );
    } catch (error: any) {
      console.log("POST /api/products error:", error);

      return NextResponse.json(
        {
          message: "Failed to add product",
          error: error.message || "Something went wrong",
        },
        { status: 500 }
      );
    }
  });
};
