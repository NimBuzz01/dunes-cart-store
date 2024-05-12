import { getCollections } from "@/actions/actions";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const collections = await getCollections();
    return NextResponse.json(collections);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
