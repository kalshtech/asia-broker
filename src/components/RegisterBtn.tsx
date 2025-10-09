"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

type Props = {
    text?: string;
};

const RegisterBtn = (props: Props) => {
    const t = useTranslations("Common");
    const { text } = props;
    return (
        <div className={"cursor-pointer"}>
            <Button
                className={"rounded-full px-8 h-10 cursor-pointer bg-theme-active hover:bg-theme-active-hover"}
            >
                { text ? text : t("register") }
            </Button>
        </div>
    )
}

export default RegisterBtn;