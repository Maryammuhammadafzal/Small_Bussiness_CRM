import { connectToDB } from "@/lib/db";
import { NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    await connectToDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('User already exist');
      return NextResponse.json({ error: "User already exist" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password , 8);

    const newUser = await User.create({
        name , 
        email, 
        password: hashedPassword
    });

    console.log('User Created Successfully');
    return NextResponse.json({ message: 'User Created Successfully' , user: newUser} , { status : 200})
  } catch (error) {
    console.log('Error creating User');
    return NextResponse.json({ error: "Error creating User" }, { status: 500 });
  }
}
