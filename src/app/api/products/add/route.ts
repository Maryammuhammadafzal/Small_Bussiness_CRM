import { connectToDB } from "@/lib/db";

export async function POST(req: any) {
    await connectToDB()
    const body = await req.json;
    console.log(body)
}