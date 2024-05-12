import { getProducts } from "@/actions/actions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await getProducts({ isFeatured: false });
    return NextResponse.json(products);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
