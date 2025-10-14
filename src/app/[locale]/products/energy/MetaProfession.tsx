"use client";
import * as React from 'react'
import { useTranslations, useLocale } from "next-intl";
import Row from "@/components/common/products/Row";

const MetaProfession = () => {
    const t =  useTranslations("Pages.products.energy");
    const local = useLocale();
    const isEn = local === "en";

    const rowAry = [
        { imageUrl: "/images/products/future-professional1.png", title: t("professional.row.col1.title"), desc: t("professional.row.col1.desc") },
        { imageUrl: "/images/products/future-professional2.png", title: t("professional.row.col2.title"), desc: t("professional.row.col2.desc") },
        { imageUrl: "/images/products/future-professional3.png", title: t("professional.row.col3.title"), desc: t("professional.row.col3.desc") },
        { imageUrl: "/images/products/future-professional4.png", title: t("professional.row.col4.title"), desc: t("professional.row.col4.desc") },
    ];
    return isEn &&  <Row ary={rowAry} title={t("professional.title")} />
}

export default MetaProfession