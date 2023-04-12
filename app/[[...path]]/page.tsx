import { notFound } from 'next/navigation'
import { Makeswift } from '@makeswift/runtime/next'
import { getConfig } from '../../utils/get-config';
import { MakeSwiftPage } from './makeswift-page';

const config = getConfig();

export async function generateStaticParams() {
    const makeswift = new Makeswift(config.makeswift.siteApiKey)
    const pages = await makeswift.getPages()

    return pages.map((page) => ({
        path: page.path.split('/').filter((segment) => segment !== ''),
    }));
}

async function fetchPageData(params: { path?: string[] }) {
    const makeswift = new Makeswift(config.makeswift.siteApiKey)
    const path = '/' + (params?.path ?? []).join('/')
    const snapshot = await makeswift.getPageSnapshot(path)

    if (snapshot == null) return { notFound: true }

    return { snapshot }
}

export default async function Page({ params }: { params: { path?: string[] } }) {
    const { snapshot } = await fetchPageData(params);

    if (snapshot == null) {
        return notFound();
    };

    return <MakeSwiftPage snapshot={snapshot} />
}