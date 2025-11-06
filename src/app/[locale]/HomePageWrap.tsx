"use client";
import { useLocale } from "next-intl";
import HomePage from "@/components/home-page";
import JpHomePage from "@/components/jp-home-page";

export default function () {
    const locale = useLocale();

    return locale === "ja" ? <JpHomePage/> : <HomePage/>;
}
