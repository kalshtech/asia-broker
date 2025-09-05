import HomeSwiper from "./HomeSwiper";
import Advertisement from "./Advertisement";
import Pricing from "./Pricing";
import Markets from "./Markets";
import Speed from "./Speed";
import DownloadAndRegister from "./DownloadAndRegister";
import Community from "./Community";
import Assets from "./Assets";
import Properly from "./Properly";
import Cooperator from "./Cooperator";
import Reward from "./Reward";
import Competition from "./Competition";
import Calendar from "./Calendar";

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
