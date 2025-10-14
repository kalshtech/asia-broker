"use client";
import * as React from 'react'
import { useTranslations, useLocale } from "next-intl";
import MoreMarkets from "@/components/common/products/MoreMarkets";

const MetaMoreMarkets = () => {
    const t = useTranslations("Pages.products.energy");
    const local = useLocale();
    const isEn = local === "en";

    return !isEn && (
        <MoreMarkets
            title={t("moreMarket.title")}
            desc={t("moreMarket.desc")}
            btnText={t("moreMarket.btnText")}
            imageUrl={"bg-[url(/images/products/pm-market-background.png)]"}
        />
    )
}

export default MetaMoreMarkets;