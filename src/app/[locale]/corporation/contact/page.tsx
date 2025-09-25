import * as React from 'react';
import { getTranslations } from "next-intl/server";
import Banner from "./Banner";
import Methods from "./Methods";
import JoinUS from "./JoinUS";
import ContactType from "./ContactType";
import RowTable from "@/components/common/RowTable";
import Colleague from "./Colleague";
import Tools from "@/components/common/Tools";
import {TableCell, TableRow} from "@/components/ui/table";
import classnames from "classnames";

export default async function Page() {
    const t = await getTranslations("Pages.corporation.contact");
    const tableAry = [
        { text: t("language.table.head.status") },
        { text: t("language.table.head.support") },
        { text: t("language.table.head.statement") },
    ];

    const ary = [
        { status: 1, statusText: t("language.online"), support: "中文 / 粤语", statement: "" },
        { status: 1, statusText: t("language.online"), support: "日语", statement: "" },
        { status: 1, statusText: t("language.online"), support: "越南语", statement: "" },
        { status: 1, statusText: t("language.online"), support: "英文", statement: t("language.prompt1") },
        { status: 0, statusText: t("language.ready"), support: "韩文", statement: t("language.prompt2") },
        { status: 0, statusText: t("language.ready"), support: "泰语", statement: t("language.prompt3") },
    ]


    return (
        <div>
            <Banner/>
            <Methods/>
            <JoinUS/>
            <ContactType/>
            <RowTable
                title={t("language.title")}
                desc={t("language.desc")}
                rowHeadAry={tableAry}
            >
                {
                    ary.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className={"py-4"}>
                                <div className={"flex items-center"}>
                                    <span className={classnames(["w-1 h-1 block rounded-full", {
                                        "bg-[#00A478]": item.status === 1,
                                        "bg-[#FFAE46]": item.status === 0,
                                    }])}/>
                                    <span className={"ml-4"}>{ item.statusText }</span>
                                </div>
                            </TableCell>
                            <TableCell className={"py-4"}>
                                { item.support }
                            </TableCell>
                            <TableCell className={"py-4"}>
                                { item.statement ?? "" }
                            </TableCell>
                        </TableRow>
                    ))
                }
            </RowTable>
            <Colleague/>
            <Tools/>
        </div>
    )
}