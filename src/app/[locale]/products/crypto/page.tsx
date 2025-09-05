import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "@/components/common/Banner";
import Commission from "@/components/common/Commission";
import MoreMarkets from "@/components/common/MoreMarkets";

export default async function Page() {
    const t = await getTranslations("Pages.products.crypto");
    return (
        <div>
            <Banner
                title={t("banner.title")}
                midst={t("banner.midst")}
                description={t("banner.description")}
                imageUrl={"bg-[url(/images/products/crypto-background.png)]"}
            />
            <Commission
                title={t("commission.title")}
                midst={t("commission.midst")}
                desc={t("commission.desc")}
                more={t("commission.more")}
                theme={"light"}
                imageUrl={"bg-[url(/images/products/crypto-commission-background.png)]"}
            />
            <MoreMarkets
                title={t("moreMarket.title")}
                desc={t("moreMarket.desc")}
                midst={t("moreMarket.midst")}
                btnText={t("moreMarket.btnText")}
                imageUrl={"bg-[url(/images/products/crypto-market-background.png)]"}
            />
        </div>
    )
}