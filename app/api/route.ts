export async function GET() {
  return Response.json({ message: 'Hello World' })
}

export async function POST(request: Request) {
  const response = await request.json()
  return Response.json({ message: 'Data received', data: response })
}