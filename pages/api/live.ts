import type { NextRequest } from 'next/server'

export default async function live(req: NextRequest) {
  const data = await (await fetch(process.env.API_URL as string + req.nextUrl.searchParams.get('id'))).json()
  return new Response (
    JSON.stringify(data),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
