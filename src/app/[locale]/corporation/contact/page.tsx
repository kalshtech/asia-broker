import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";
import Methods from "./Methods";
import JoinUS from "./JoinUS";
import ContactType from "./ContactType";
import Languages from "./Languages";
import Colleague from "./Colleague";
import Tools from "@/components/common/Tools";

export default async function Page() {
    return (
        <div>
            <Banner/>
            <Methods/>
            <JoinUS/>
            <ContactType/>
            <Languages/>
            <Colleague/>
            <Tools/>
        </div>
    )
}