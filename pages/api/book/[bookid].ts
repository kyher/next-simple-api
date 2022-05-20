// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { bookid } = req.query;
  const book = await prisma.book.findUnique({
    where: {
      id: parseInt(bookid.toString()),
    },
  });
  res.json(book);
}
