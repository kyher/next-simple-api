// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  if (session) {
    const data = req.body;
    try {
      await prisma.book.create({
        data: {
          ...data,
        },
      });
      res.redirect("/");
    } catch (err) {
      console.log(err);
      res.status(403).json({ err: "Error occured while adding a new book." });
    }
  } else {
    res.send({ error: "You are not logged in." });
  }
};
