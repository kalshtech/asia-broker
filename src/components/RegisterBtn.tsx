"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const RegisterBtn = () => {
    const t = useTranslations("Common");
    return (
        <div className={"cursor-pointer"}>
            <Button
                className={"rounded-full cursor-pointer bg-theme-active hover:bg-theme-active-hover"}
            >
                { t("register") }
            </Button>
        </div>
    )
}

export default RegisterBtn;