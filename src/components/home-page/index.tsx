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
            <DownloadAndRegister/>
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
