import bcrypt from "bcrypt";
import User from "@/models/user";
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { email, username, name, password, phoneNumber } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    await connectMongoDB();
    await User.create({ name, username, email, hashedPassword, phoneNumber });

    return NextResponse.json({ message: "user created 💚" }, { status: 200 });
  } catch (error: any) {
    console.log("register error ❤️");
    return NextResponse.json(
      { message: "internal error ❤️❤️" },
      { status: 500 },
    );
  }
};
