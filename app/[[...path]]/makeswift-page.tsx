'use client';

import { MakeswiftPageSnapshot, Page } from "@makeswift/runtime/next";

export const MakeSwiftPage = ({ snapshot }: { snapshot: MakeswiftPageSnapshot }) => {
    return <Page snapshot={snapshot} />
};