import { NextResponse, NextRequest } from "next/server";
import {
  responseInternalServerError,
  responseNotFound,
  responseSuccess,
} from "./mockResponse";

// To handle a GET request to /api
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  var data = null;
  try {
    if (id === "0x") {
      return NextResponse.json(responseSuccess, { status: 200 });
    } else {
      return NextResponse.json(responseNotFound, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(responseInternalServerError, { status: 500 });
  }
}
