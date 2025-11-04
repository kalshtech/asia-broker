"use client";
import * as React from 'react'
import { useTranslations } from "next-intl";
import Container from "@/components/Container";
import TablePackage from "@/components/common/TablePackAge"

const Type = () => {
    const t = useTranslations("Pages.accounts.classic.type");
    const card1Ary = [
        {one: t("card1.ul.li-1-title"), two: t("card1.ul.li-1-desc")},
        {one: t("card1.ul.li-2-title"), two: t("card1.ul.li-2-desc")},
        {one: t("card1.ul.li-3-title"), two: t("card1.ul.li-3-desc")},
        {one: t("card1.ul.li-4-title"), two: t("card1.ul.li-4-desc")},
        {one: t("card1.ul.li-5-title"), two: t("card1.ul.li-5-desc")},
        {one: t("card1.ul.li-6-title"), two: t("card1.ul.li-6-desc")},
        {one: t("card1.ul.li-7-title"), two: t("card1.ul.li-7-desc")}
    ];

    const card2Ary = [
        {one: t("card2.ul.li-1-title"), two: t("card2.ul.li-1-desc")},
        {one: t("card2.ul.li-2-title"), two: t("card2.ul.li-2-desc")},
        {one: t("card2.ul.li-3-title"), two: t("card2.ul.li-3-desc")},
        {one: t("card2.ul.li-4-title"), two: t("card2.ul.li-4-desc")},
        {one: t("card2.ul.li-5-title"), two: t("card2.ul.li-5-desc")},
        {one: t("card2.ul.li-6-title"), two: t("card2.ul.li-6-desc")},
        {one: t("card2.ul.li-7-title"), two: t("card2.ul.li-7-desc")}
    ];

    const colsAry = [
        {one: t("table.row.col1-1-1"), two: t("table.row.col1-1-2"), three: t("table.row.col1-1-3")},
        {one: t("table.row.col1-2-1"), two: t("table.row.col1-2-2"), three: t("table.row.col1-2-3")},
        {one: t("table.row.col1-3-1"), two: t("table.row.col1-3-2"), three: t("table.row.col1-3-3")},
        {one: t("table.row.col1-4-1"), two: t("table.row.col1-4-2"), three: t("table.row.col1-4-3")},
        {one: t("table.row.col1-5-1"), two: t("table.row.col1-5-2"), three: t("table.row.col1-5-3")},
        { one: t("table.row.col1-6-1"), two: t("table.row.col1-6-2"), three: t("table.row.col1-6-3") },
        { one: t("table.row.col1-7-1"), two: t("table.row.col1-7-2"), three: t("table.row.col1-7-3") }
    ];
    return (
        <section className={"bg-[url(/images/accounts/account-type-background.png)] bg-cover bg-center py-16 xl:mt-24 xl:py-30"}>
            <Container>
                <div>
                    <div className={"grid grid-cols-12 gap-8"}>
                        <div className={"col-span-12 lg:col-span-6 h-full"}>
                            <TablePackage
                                first={t("card1.title")}
                                second={t("card1.desc")}
                                ary={card1Ary}
                            />
                        </div>
                        <div className={"col-span-12 lg:col-span-6 h-full"}>
                            <TablePackage
                                first={t("card2.title")}
                                second={t("card2.desc")}
                                ary={card2Ary}
                            />
                        </div>
                    </div>

                    <div className={"mt-4 lg:mt-16"}>
                        <TablePackage
                            first={t("table.row.head1")}
                            second={t("table.row.head2")}
                            third={t("table.row.head3")}
                            ary={colsAry}
                            isShow={false}
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Type;