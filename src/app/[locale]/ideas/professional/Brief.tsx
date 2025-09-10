import * as React from 'react';
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

export default async function Brief() {
    const t = await getTranslations("Pages.ideas.professional.brief");
    return (
        <section className={"p-30"}>
            <div className={"grid grid-cols-12 gap-4"}>
                <div className={"col-span-6"}>
                    <div>
                        <Typography variant={"h3"}>
                            {t("row.left.title")}
                        </Typography>
                        <Image
                            src={"/images/ideas/financial-report.png"}
                            width={640}
                            height={320}
                            alt={"financial-report"}
                            title={"financial-report"}
                            className={"mt-4 mx-auto"}
                        />
                        <div className={"mt-6 flex"}>
                             <div>
                                 <Typography variant={"h3"}>
                                     {t("row.left.prospect")}
                                 </Typography>
                                 <Typography
                                     variant={"muted"}
                                     className={"mt-4"}
                                 >
                                     {t("row.left.prospect-desc")}
                                 </Typography>
                             </div>
                             <div className={"ml-auto flex justify-center items-center"}>
                                 <Button className={"rounded-full h-10 px-8 bg-theme-active hover:bg-theme-active-hover"}>
                                     {t("row.left.download")}
                                 </Button>
                             </div>
                        </div>
                    </div>
                </div>
                <div className={"col-span-6"}>
                    <div>
                        <Typography variant={"h3"}>
                            { t("row.right.title") }
                        </Typography>

                        <ul className={"mt-6"}>
                            <li className={"my-5"}>
                                <Typography variant={"large"}>
                                    {t("row.right.title")}
                                </Typography>
                            </li>
                            <li className={"my-5"}>
                                <Typography variant={"large"}>
                                    {t("row.right.title")}
                                </Typography>
                            </li>
                            <li className={"my-5"}>
                                <Typography variant={"large"}>
                                    {t("row.right.title")}
                                </Typography>
                            </li>
                            <li className={"my-5"}>
                                <Typography variant={"large"}>
                                    {t("row.right.title")}
                                </Typography>
                            </li>
                            <li className={"my-5"}>
                                <Typography variant={"large"}>
                                    {t("row.right.title")}
                                </Typography>
                            </li>
                            <li className={"my-4"}>
                                <Typography variant={"large"}>
                                    {t("row.right.title")}
                                </Typography>
                            </li>
                            <li className={"my-4"}>
                                <Typography variant={"large"}>
                                    {t("row.right.title")}
                                </Typography>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}