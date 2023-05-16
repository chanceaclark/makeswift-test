import { MakeswiftApiHandler } from '@makeswift/runtime/next'

export const GET = MakeswiftApiHandler(process.env.MAKESWIFT_API_KEY);
export const POST = MakeswiftApiHandler(process.env.MAKESWIFT_API_KEY);
export const PUT = MakeswiftApiHandler(process.env.MAKESWIFT_API_KEY);
export const PATCH = MakeswiftApiHandler(process.env.MAKESWIFT_API_KEY);
export const DELETe = MakeswiftApiHandler(process.env.MAKESWIFT_API_KEY);