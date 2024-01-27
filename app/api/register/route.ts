import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    const { email, username, name, password, phoneNumber } = body;

    // Validate inputs
    if (!email || !username || !name || !password || !phoneNumber) {
      return NextResponse.json({ message: "Missing required fields ❤️" }, { status: 400 });
    }

    // Check if user with the same email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return NextResponse.json({ message: "User with the same email or username already exists ❤️" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await connectMongoDB();
    await User.create({ name, username, email, hashedPassword, phoneNumber });

    return NextResponse.json({ message: "User created successfully 💚" }, { status: 200 });
  } catch (error) {
    console.error("Register error:", error);
    return NextResponse.json({ message: "Internal server error ❤️❤️" }, { status: 500 });
  }
};
