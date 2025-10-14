"use client";
import * as React from 'react'
import { useTranslations, useLocale } from "next-intl";
import Row from "@/components/common/products/Row";

type Props = {
    rowAry: Array<{ imageUrl: string; title: string; desc: string }>
    title: string;
}

const MetaProfession = (props: Props) => {
    const { rowAry, title } = props;
    const t =  useTranslations("Pages.products.energy");
    const local = useLocale();
    const isEn = local === "en";

    return isEn &&  <Row ary={rowAry} title={title} />
}

export default MetaProfession