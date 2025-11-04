"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import classnames from "classnames";

type Props = {
    text?: string;
    className?: string;
    path?: string;
};

const RegisterBtn = (props: Props) => {
    const t = useTranslations("Common");
    const { text, className, path } = props;
    return (
        <div className={classnames(["cursor-pointer"])}>
            <a href={path}
               target={"_blank"}
            >
                <Button className={classnames(["cursor-pointer bg-theme-active hover:bg-theme-active-hover", className])}>
                    { text ? text : t("register") }
                </Button>
            </a>
        </div>
    )
}

export default RegisterBtn;