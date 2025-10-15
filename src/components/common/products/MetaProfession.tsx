"use client";
import * as React from 'react'
import { useLocale } from "next-intl";
import Row from "@/components/common/products/Row";

type Props = {
    rowAry: Array<{ imageUrl: string; title: string; desc: string }>
    title: string;
    children?: React.ReactNode
}

const MetaProfession = (props: Props) => {
    const { rowAry, title, children } = props;
    const local = useLocale();
    const isEn = local === "en";

    return isEn &&  (
        <>
            <Row children={children} ary={rowAry} title={title} />
        </>
    )
}

export default MetaProfession