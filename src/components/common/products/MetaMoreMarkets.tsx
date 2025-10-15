"use client";
import * as React from 'react'
import { useTranslations, useLocale } from "next-intl";
import MoreMarkets from "@/components/common/products/MoreMarkets";

type Props = {
    languageLocal: string;
    backgroundImage: string;
};

const MetaMoreMarkets = (props: Props) => {
    const { languageLocal, backgroundImage } = props;
    const t = useTranslations(languageLocal);
    const local = useLocale();
    const isEn = local === "en";

    return !isEn && (
        <MoreMarkets
            title={t("moreMarket.title")}
            desc={t("moreMarket.desc")}
            midst={t("moreMarket.midst")}
            btnText={t("moreMarket.btnText")}
            imageUrl={backgroundImage}
        />
    )
}

export default MetaMoreMarkets;