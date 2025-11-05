import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";
import Reasons from "./Reasons";
import Experience from "./Experience";
import ProfessionalTools from "@/app/[locale]/platform/ProfessionTools";
import DownloadItem from "./DownloadItem";
import Tools from "@/components/common/Tools";
import Step from "./Step";

export default async function Page() {
    const t = await getTranslations("Pages.platform");
    const DownloadAry = [
        {
            direction: "left",
            title: t("download.windows.title"),
            desc: t("download.windows.desc"),
            imageUrl: "/images/platform/download2.png",
            downloadText: t("download.windows.downloadText"),
            url: "https://document.afttjp.com/AFTT_setup.exe",
        },
        {
            direction: "right",
            title: t("download.macos.title"),
            desc: t("download.macos.desc"),
            imageUrl: "/images/platform/download1.png",
            downloadText: t("download.macos.downloadText"),
            url: "https://download.mql5.com/cdn/web/metaquotes.ltd/mt5/MetaTrader5.pkg.zip?utm_source=support.metaquotes.net&utm_campaign=download.mt5.macos",
        },
        {
            direction: "left",
            title: t("download.ios.title"),
            desc: t("download.ios.desc"),
            imageUrl: "/images/platform/download3.png",
            downloadText: t("download.ios.downloadText"),
            url: "https://download.metatrader.com/cdn/mobile/mt5/ios?server=AsiaFutureTrading-Server",
        },
        {
            direction: "right",
            title: t("download.android.title"),
            desc: t("download.android.desc"),
            imageUrl: "/images/platform/download4.png",
            downloadText: t("download.android.downloadText"),
            url: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/metatrader5.apk?utm_source=www.metatrader5.com&utm_campaign=install.metaquotes",
        },
        {
            direction: "left",
            title: t("download.webtrader.title"),
            desc: t("download.webtrader.desc"),
            imageUrl: "/images/platform/download5.png",
            downloadText: t("download.webtrader.downloadText"),
            url: "https://app.afttmarkets.com/"
        }
    ];
    return (
        <div>
            <Banner/>
            <Reasons/>
            <Experience/>
            <ProfessionalTools/>
            {
                DownloadAry.map((item, i) => (
                    <DownloadItem key={i} {...item} />
                ))
            }
            <Step />
            <Tools/>
        </div>
    )
}