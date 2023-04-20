import { NextResponse } from "next/server";
import data from "../data.json";

/* GET - /api/products/search/ */
export const GET = async (req, res) => {
  /* GET params */
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");
  const filtered = data.filter((e) => {
    return e.title.toLowerCase().includes(query.toLowerCase()) || e.description.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filtered);
};
