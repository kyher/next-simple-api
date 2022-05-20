// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { bookid } = req.query;
  const { title, author } = req.body;
  try {
    await prisma.book.update({
      where: {
        id: parseInt(bookid.toString()),
      },
      data: {
        title,
        author,
      },
    });
    res.redirect(`/book/${bookid}`);
  } catch (error) {
    res.status(403).json({ err: "Error occurred while updating a book item." });
  }
};
