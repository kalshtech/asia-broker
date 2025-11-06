import HomeSwiper from "@/components/home-page/HomeSwiper";
import Advertisement from "@/components/home-page/Advertisement";
import Pricing from "@/components/home-page/Pricing";
import Markets from "@/components/home-page/Markets";
import Speed from "@/components/home-page/Speed";
import DownloadAndRegister from "@/components/home/DownloadAndRegister";
import Community from "@/components/home-page/Community";
import Assets from "@/components/home-page/Assets";
import Properly from "@/components/home-page/Properly";
import Calendar from "@/components/home-page/Calendar";
import Competition from "@/components/home-page/Competition";
import Reward from "@/components/home/Reward";
import Cooperator from "@/components/home-page/Cooperator";

export default function Home() {
    return (
        <div>
            <HomeSwiper/>
            <Advertisement/>
            <Pricing/>
            <Markets/>
            <Speed/>
            <DownloadAndRegister
                languagePath={"Pages.home.downloadAndRegister"}
                col1Bg={"bg-[url(/images/mobile/example-kline-desk.png)]  xl:bg-[url(/images/home/example-kline-desk.png)]"}
                col1BgIsCover={false}
                col2Bg={"bg-[url(/images/mobile/example-kline.png)] xl:bg-[url(/images/home/example-kline.png)]"}
                col3Bg={"bg-[url(/images/mobile/auto-MQL5.png)] xl:bg-[url(/images/home/auto-MQL5.png)]"}
                col4Bg={"bg-[url(/images/mobile/auto-EA.png)] xl:bg-[url(/images/home/auto-EA.png)]"}
            />
            <Community/>
            <Assets/>
            <Properly/>
            <Calendar/>
            <Competition/>
            <Reward/>
            <Cooperator/>
        </div>
    );
}
