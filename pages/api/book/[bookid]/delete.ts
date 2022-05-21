// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { bookid } = req.query;
  try {
    await prisma.book.delete({
      where: {
        id: parseInt(bookid.toString()),
      },
    });
    res.redirect("/");
  } catch (error) {
    res.status(403).json({ err: "Error occured while deleting a book item." });
  }
}
