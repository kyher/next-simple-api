// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Book } from '../../types/Book'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book[]>
) {
  res.status(200).json([{"title": 'East of Eden', "author": 'Steinbeck'}, {"title" : "Lord of the Rings", "author": "Tolkien"}])
}
