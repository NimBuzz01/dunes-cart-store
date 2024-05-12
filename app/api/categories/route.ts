import { getCategories } from "@/actions/actions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await getCategories();
    return NextResponse.json(categories);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
