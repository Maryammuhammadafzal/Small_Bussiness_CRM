import { connectToDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  await connectToDB();
  const body = await req.json();
  console.log(req.body);
  console.log(body);

  return NextResponse.json({
    message: "Product added successfully!",
    data: body,
  });
}
