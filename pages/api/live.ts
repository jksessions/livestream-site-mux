// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const incoming = await fetch(process.env.API_URL as string + req.query.id)
  const data = await incoming.json()
  res.send(data)
}
