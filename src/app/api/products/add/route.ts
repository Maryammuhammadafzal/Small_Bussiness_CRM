import { connectToDB } from "@/lib/db";
import uploadMiddleware from "@/lib/upload";
import Product from "@/models/Product";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    await uploadMiddleware("product_images")(req as NextRequest);

    const body = await req.json();
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
}
