import { connectToDatabase } from "@/lib/mongodb";
import { Product } from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const products = await Product.find({ isAvailable: true });
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  await connectToDatabase();
  const body = await req.json();

  try {
    const product = await Product.create(body);
    return NextResponse.json(product, { status: 201 });
  } catch (err) {
    console.error("Error creating product:", err);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 400 }
    );
  }
}
