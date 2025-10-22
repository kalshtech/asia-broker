"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import classnames from "classnames";

type Props = {
    text?: string;
    className?: string;
};

const StartTradingBtn = (props: Props) => {
    const t = useTranslations("Common");
    const { text, className } = props;
    return (
        <div className={classnames(["cursor-pointer"])}>
            <Button className={classnames(["cursor-pointer bg-theme-active hover:bg-theme-active-hover", className])}>
                { text ? text : t("startTrade") }
            </Button>
        </div>
    )
}

export default StartTradingBtn;