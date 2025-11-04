"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import { Typography } from "@/components/ui/typography";
import Container from "@/components/Container";
import { Slider } from "@/components/ui/slider"
import {http} from "@/utils/http";
import {params_sofr} from "@/params/api";

const total = 500000;

const MockCalculator = () => {
    const t = useTranslations("Pages.accounts.profit.mockCalculator");
    const [rate, setRate] = React.useState<any>(0);
    const [slider, setSlider] = React.useState<number[]>([40]);
    const [margin, setMargin] = React.useState("");
    const handleGetData = async () => {
        const result = await http.get(params_sofr.url, {  });
        if(result.data.status === 0) {
            const data = await result.data.data;
            setRate(data[0].newData.dailyRate);
        }
    }

    const handleCalculateMargin = () => {
        const value = slider[0] / 100;
        const wantNumber = total * value;
        setMargin((wantNumber / rate * 100).toFixed(3))
    }

    React.useEffect(() => {
        handleGetData();
        handleCalculateMargin();
    }, [rate])

    React.useEffect(() => {
        handleCalculateMargin();
    }, [slider])

    return (
        <section className={"bg-[#262E48] py-16 xl:py-30"}>
            <Container>
                <div className={"grid grid-cols-12 gap-4"}>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <div>
                            <Typography
                                variant={"h3"}
                                className={"!text-white"}
                            >
                                {t("row.col1.title1")}
                            </Typography>
                            <Typography
                                variant={"p"}
                                className={"!text-white max-w-xl mt-4"}
                            >
                                {t("row.col1.desc1")}
                            </Typography>
                        </div>
                        <div className={"mt-20"}>
                            <Typography
                                variant={"h4"}
                                className={"!text-white font-medium"}
                            >
                                {t("row.col1.title2")}
                                {rate}%
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"!text-white max-w-xl mt-6"}
                            >
                                {t("row.col1.desc2")}
                            </Typography>
                        </div>
                    </div>
                    <div className={"col-span-12 lg:col-span-6"}>
                        <Typography
                            variant={"h5"}
                            className={"!text-white font-medium"}
                        >
                            {t("row.col2.title")}
                        </Typography>
                        <div className={"mt-4"}>
                            <div className="[&_span.bg-primary]:bg-theme-active">
                                <Slider value={slider} onValueChange={(value) => setSlider(value)} />
                            </div>
                            <div className={"flex mt-2"}>
                                <div className={"text-white"}>USD 0</div>
                                <div className={"text-white ml-auto"}>USD $500,000</div>
                            </div>
                            <div className={"mt-4"}>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-[#9399AC]"}
                                >
                                    {t("row.col2.desc")}
                                </Typography>
                            </div>
                            <div className={"mt-4 lg:mt-8"}>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-white"}
                                >
                                    {t("row.col2.tips")}
                                </Typography>
                                <Typography
                                    variant={"h5"}
                                    className={"!text-white font-normal mt-4"}
                                >
                                    USD ${margin}
                                </Typography>
                                <Typography
                                    variant={"muted"}
                                    className={"!text-[#9399AC] font-normal mt-8"}
                                >
                                    {t("row.col2.prompt")}
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default MockCalculator;