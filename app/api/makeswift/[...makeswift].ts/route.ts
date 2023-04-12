import { MakeswiftApiHandler } from '@makeswift/runtime/next'
import { getConfig } from '../../../../utils/get-config';

const config = getConfig();

const handler = MakeswiftApiHandler(config.makeswift.siteApiKey)

export const GET = handler;
export const PUT = handler;
export const POST = handler;
export const PATCH = handler;
export const DELETE = handler;
export const HEAD = handler;
export const OPTION = handler;

