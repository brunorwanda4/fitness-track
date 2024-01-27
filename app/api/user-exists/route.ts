import connectMongoDB from "@/lib/mongodb"
import User from "@/models/user";
import { NextResponse } from "next/server";

export const POST = async ( request: Request) => {
    try {
        const {email } = await request.json();
        await connectMongoDB();
        const user = await User.findOne({email}).select("_id");
        console.log("user: " , user);
        return NextResponse.json({user})
    } catch (error : any) {
        console.log("register error for find one if user exits ❤️");
    }
}