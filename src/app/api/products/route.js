import { NextRequest, NextResponse } from "next/server";
import data from "./data.json";

/* GET /api/products */
export const GET = (req) => {
  return NextResponse.json(data);
};

/* POST /api/products */
/* POST request has to be async */
export const POST = async (req) => {
  const body = await req.json();
  return NextResponse.json({});
};
