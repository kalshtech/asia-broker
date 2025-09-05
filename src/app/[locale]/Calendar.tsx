"use client";
import React, { useState } from "react";
import { Typography } from "@/components/ui/typography";
import {motion, Variants} from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { params_economic_calendar } from "@/params/api";
import dayjs from "dayjs";
import { http } from "@/utils/http";
import { Skeleton } from "@/components/ui/skeleton";
import StarRating from "@/components/Rating";

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

const CalendarComponent = () => {
    const t = useTranslations("Pages.home.calendar");
    const CommonT = useTranslations("Common");
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    const [star, setStar] = React.useState<string>("all");
    const [country, setCountry] = React.useState<string>("all");
    const [tableData, setTableData] = React.useState<any>([]);
    const [loading, setLoading] = React.useState(true);

    const starAry = [
        { value: 'all', label: CommonT("all")},
        { value: 'High', label: t("stars.high")},
        { value: 'Medium', label: t("stars.medium")},
        { value: 'Low', label: t("stars.low")},
        { value: 'none', label: t("stars.none")},
    ];

    const countriesAry = [
        { value: 'all', label: CommonT("all"), phone: '' },
        { value: 'AD', label: 'Andorra', phone: '376' },
        { value: 'AE', label: 'United Arab Emirates', phone: '971'},
        { value: 'AF', label: 'Afghanistan', phone: '93' },
        { value: 'AG', label: 'Antigua and Barbuda', phone: '1-268' },
        { value: 'AI', label: 'Anguilla', phone: '1-264' },
        { value: 'AL', label: 'Albania', phone: '355' },
        { value: 'AM', label: 'Armenia', phone: '374' },
        { value: 'AO', label: 'Angola', phone: '244' },
        { value: 'AQ', label: 'Antarctica', phone: '672' },
        { value: 'AR', label: 'Argentina', phone: '54' },
        { value: 'AS', label: 'American Samoa', phone: '1-684' },
        { value: 'AT', label: 'Austria', phone: '43' },
        { value: 'AU', label: 'Australia', phone: '61', suggested: true},
        { value: 'AW', label: 'Aruba', phone: '297' },
        { value: 'AX', label: 'Alland Islands', phone: '358' },
        { value: 'AZ', label: 'Azerbaijan', phone: '994' },
        { value: 'BA', label: 'Bosnia and Herzegovina', phone: '387',},
        { value: 'BB', label: 'Barbados', phone: '1-246' },
        { value: 'BD', label: 'Bangladesh', phone: '880' },
        { value: 'BE', label: 'Belgium', phone: '32' },
        { value: 'BF', label: 'Burkina Faso', phone: '226' },
        { value: 'BG', label: 'Bulgaria', phone: '359' },
        { value: 'BH', label: 'Bahrain', phone: '973' },
        { value: 'BI', label: 'Burundi', phone: '257' },
        { value: 'BJ', label: 'Benin', phone: '229' },
        { value: 'BL', label: 'Saint Barthelemy', phone: '590' },
        { value: 'BM', label: 'Bermuda', phone: '1-441' },
        { value: 'BN', label: 'Brunei Darussalam', phone: '673' },
        { value: 'BO', label: 'Bolivia', phone: '591' },
        { value: 'BR', label: 'Brazil', phone: '55' },
        { value: 'BS', label: 'Bahamas', phone: '1-242' },
        { value: 'BT', label: 'Bhutan', phone: '975' },
        { value: 'BV', label: 'Bouvet Island', phone: '47' },
        { value: 'BW', label: 'Botswana', phone: '267' },
        { value: 'BY', label: 'Belarus', phone: '375' },
        { value: 'BZ', label: 'Belize', phone: '501' },
        { value: 'CA', label: 'Canada', phone: '1', suggested: true},
        { value: 'CC', label: 'Cocos (Keeling) Islands', phone: '61'},
        { value: 'CD', label: 'Congo, Democratic Republic of the', phone: '243' },
        { value: 'CF', label: 'Central African Republic', phone: '236' },
        { value: 'CG', label: 'Congo, Republic of the', phone: '242',},
        { value: 'CH', label: 'Switzerland', phone: '41' },
        { value: 'CI', label: "Cote d'Ivoire", phone: '225' },
        { value: 'CK', label: 'Cook Islands', phone: '682' },
        { value: 'CL', label: 'Chile', phone: '56' },
        { value: 'CM', label: 'Cameroon', phone: '237' },
        { value: 'CN', label: 'China', phone: '86' },
        { value: 'CO', label: 'Colombia', phone: '57' },
        { value: 'CR', label: 'Costa Rica', phone: '506' },
        { value: 'CU', label: 'Cuba', phone: '53' },
        { value: 'CV', label: 'Cape Verde', phone: '238' },
        { value: 'CW', label: 'Curacao', phone: '599' },
        { value: 'CX', label: 'Christmas Island', phone: '61' },
        { value: 'CY', label: 'Cyprus', phone: '357' },
        { value: 'CZ', label: 'Czech Republic', phone: '420' },
        { value: 'DE', label: 'Germany', phone: '49', suggested: true },
        { value: 'DJ', label: 'Djibouti', phone: '253' },
        { value: 'DK', label: 'Denmark', phone: '45' },
        { value: 'DM', label: 'Dominica', phone: '1-767' },
        { value: 'DO', label: 'Dominican Republic', phone: '1-809' },
        { value: 'DZ', label: 'Algeria', phone: '213' },
        { value: 'EC', label: 'Ecuador', phone: '593' },
        { value: 'EE', label: 'Estonia', phone: '372' },
        { value: 'EG', label: 'Egypt', phone: '20' },
        { value: 'EH', label: 'Western Sahara', phone: '212' },
        { value: 'ER', label: 'Eritrea', phone: '291' },
        { value: 'ES', label: 'Spain', phone: '34' },
        { value: 'ET', label: 'Ethiopia', phone: '251' },
        { value: 'FI', label: 'Finland', phone: '358' },
        { value: 'FJ', label: 'Fiji', phone: '679' },
        { value: 'FK', label: 'Falkland Islands (Malvinas)', phone: '500' },
        { value: 'FM', label: 'Micronesia, Federated States of', phone: '691',},
        { value: 'FO', label: 'Faroe Islands', phone: '298' },
        { value: 'FR', label: 'France', phone: '33', suggested: true, },
        { value: 'GA', label: 'Gabon', phone: '241' },
        { value: 'GB', label: 'United Kingdom', phone: '44' },
        { value: 'GD', label: 'Grenada', phone: '1-473' },
        { value: 'GE', label: 'Georgia', phone: '995' },
        { value: 'GF', label: 'French Guiana', phone: '594' },
        { value: 'GG', label: 'Guernsey', phone: '44' },
        { value: 'GH', label: 'Ghana', phone: '233' },
        { value: 'GI', label: 'Gibraltar', phone: '350' },
        { value: 'GL', label: 'Greenland', phone: '299' },
        { value: 'GM', label: 'Gambia', phone: '220' },
        { value: 'GN', label: 'Guinea', phone: '224' },
        { value: 'GP', label: 'Guadeloupe', phone: '590' },
        { value: 'GQ', label: 'Equatorial Guinea', phone: '240' },
        { value: 'GR', label: 'Greece', phone: '30' },
        { value: 'GS', label: 'South Georgia and the South Sandwich Islands', phone: '500',},
        { value: 'GT', label: 'Guatemala', phone: '502' },
        { value: 'GU', label: 'Guam', phone: '1-671' },
        { value: 'GW', label: 'Guinea-Bissau', phone: '245' },
        { value: 'GY', label: 'Guyana', phone: '592' },
        { value: 'HK', label: 'China\'s Hong Kong', phone: '852' },
        { value: 'HM', label: 'Heard Island and McDonald Islands', phone: '672',},
        { value: 'HN', label: 'Honduras', phone: '504' },
        { value: 'HR', label: 'Croatia', phone: '385' },
        { value: 'HT', label: 'Haiti', phone: '509' },
        { value: 'HU', label: 'Hungary', phone: '36' },
        { value: 'ID', label: 'Indonesia', phone: '62' },
        { value: 'IE', label: 'Ireland', phone: '353' },
        { value: 'IL', label: 'Israel', phone: '972' },
        { value: 'IM', label: 'Isle of Man', phone: '44' },
        { value: 'IN', label: 'India', phone: '91' },
        { value: 'IO', label: 'British Indian Ocean Territory', phone: '246',},
        { value: 'IQ', label: 'Iraq', phone: '964' },
        { value: 'IR', label: 'Iran, Islamic Republic of', phone: '98',},
        { value: 'IS', label: 'Iceland', phone: '354' },
        { value: 'IT', label: 'Italy', phone: '39' },
        { value: 'JE', label: 'Jersey', phone: '44' },
        { value: 'JM', label: 'Jamaica', phone: '1-876' },
        { value: 'JO', label: 'Jordan', phone: '962' },
        { value: 'JP', label: 'Japan', phone: '81', suggested: true,},
        { value: 'KE', label: 'Kenya', phone: '254' },
        { value: 'KG', label: 'Kyrgyzstan', phone: '996' },
        { value: 'KH', label: 'Cambodia', phone: '855' },
        { value: 'KI', label: 'Kiribati', phone: '686' },
        { value: 'KM', label: 'Comoros', phone: '269' },
        { value: 'KN', label: 'Saint Kitts and Nevis', phone: '1-869',},
        { value: 'KP', label: "Korea, Democratic People's Republic of", phone: '850',},
        { value: 'KR', label: 'Korea, Republic of', phone: '82' },
        { value: 'KW', label: 'Kuwait', phone: '965' },
        { value: 'KY', label: 'Cayman Islands', phone: '1-345' },
        { value: 'KZ', label: 'Kazakhstan', phone: '7' },
        { value: 'LA', label: "Lao People's Democratic Republic", phone: '856',},
        { value: 'LB', label: 'Lebanon', phone: '961' },
        { value: 'LC', label: 'Saint Lucia', phone: '1-758' },
        { value: 'LI', label: 'Liechtenstein', phone: '423' },
        { value: 'LK', label: 'Sri Lanka', phone: '94' },
        { value: 'LR', label: 'Liberia', phone: '231' },
        { value: 'LS', label: 'Lesotho', phone: '266' },
        { value: 'LT', label: 'Lithuania', phone: '370' },
        { value: 'LU', label: 'Luxembourg', phone: '352' },
        { value: 'LV', label: 'Latvia', phone: '371' },
        { value: 'LY', label: 'Libya', phone: '218' },
        { value: 'MA', label: 'Morocco', phone: '212' },
        { value: 'MC', label: 'Monaco', phone: '377' },
        { value: 'MD', label: 'Moldova, Republic of', phone: '373',},
        { value: 'ME', label: 'Montenegro', phone: '382' },
        { value: 'MF', label: 'Saint Martin (French part)', phone: '590',},
        { value: 'MG', label: 'Madagascar', phone: '261' },
        { value: 'MH', label: 'Marshall Islands', phone: '692' },
        { value: 'MK', label: 'Macedonia, the Former Yugoslav Republic of', phone: '389',},
        { value: 'ML', label: 'Mali', phone: '223' },
        { value: 'MM', label: 'Myanmar', phone: '95' },
        { value: 'MN', label: 'Mongolia', phone: '976' },
        { value: 'MO', label: 'Macao', phone: '853' },
        { value: 'MP', label: 'Northern Mariana Islands', phone: '1-670',},
        { value: 'MQ', label: 'Martinique', phone: '596' },
        { value: 'MR', label: 'Mauritania', phone: '222' },
        { value: 'MS', label: 'Montserrat', phone: '1-664' },
        { value: 'MT', label: 'Malta', phone: '356' },
        { value: 'MU', label: 'Mauritius', phone: '230' },
        { value: 'MV', label: 'Maldives', phone: '960' },
        { value: 'MW', label: 'Malawi', phone: '265' },
        { value: 'MX', label: 'Mexico', phone: '52' },
        { value: 'MY', label: 'Malaysia', phone: '60' },
        { value: 'MZ', label: 'Mozambique', phone: '258' },
        { value: 'NA', label: 'Namibia', phone: '264' },
        { value: 'NC', label: 'New Caledonia', phone: '687' },
        { value: 'NE', label: 'Niger', phone: '227' },
        { value: 'NF', label: 'Norfolk Island', phone: '672' },
        { value: 'NG', label: 'Nigeria', phone: '234' },
        { value: 'NI', label: 'Nicaragua', phone: '505' },
        { value: 'NL', label: 'Netherlands', phone: '31' },
        { value: 'NO', label: 'Norway', phone: '47' },
        { value: 'NP', label: 'Nepal', phone: '977' },
        { value: 'NR', label: 'Nauru', phone: '674' },
        { value: 'NU', label: 'Niue', phone: '683' },
        { value: 'NZ', label: 'New Zealand', phone: '64' },
        { value: 'OM', label: 'Oman', phone: '968' },
        { value: 'PA', label: 'Panama', phone: '507' },
        { value: 'PE', label: 'Peru', phone: '51' },
        { value: 'PF', label: 'French Polynesia', phone: '689' },
        { value: 'PG', label: 'Papua New Guinea', phone: '675' },
        { value: 'PH', label: 'Philippines', phone: '63' },
        { value: 'PK', label: 'Pakistan', phone: '92' },
        { value: 'PL', label: 'Poland', phone: '48' },
        { value: 'PM', label: 'Saint Pierre and Miquelon', phone: '508',},
        { value: 'PN', label: 'Pitcairn', phone: '870' },
        { value: 'PR', label: 'Puerto Rico', phone: '1' },
        { value: 'PS', label: 'Palestine, State of', phone: '970',},
        { value: 'PT', label: 'Portugal', phone: '351' },
        { value: 'PW', label: 'Palau', phone: '680' },
        { value: 'PY', label: 'Paraguay', phone: '595' },
        { value: 'QA', label: 'Qatar', phone: '974' },
        { value: 'RE', label: 'Reunion', phone: '262' },
        { value: 'RO', label: 'Romania', phone: '40' },
        { value: 'RS', label: 'Serbia', phone: '381' },
        { value: 'RU', label: 'Russian Federation', phone: '7' },
        { value: 'RW', label: 'Rwanda', phone: '250' },
        { value: 'SA', label: 'Saudi Arabia', phone: '966' },
        { value: 'SB', label: 'Solomon Islands', phone: '677' },
        { value: 'SC', label: 'Seychelles', phone: '248' },
        { value: 'SD', label: 'Sudan', phone: '249' },
        { value: 'SE', label: 'Sweden', phone: '46' },
        { value: 'SG', label: 'Singapore', phone: '65' },
        { value: 'SH', label: 'Saint Helena', phone: '290' },
        { value: 'SI', label: 'Slovenia', phone: '386' },
        { value: 'SJ', label: 'Svalbard and Jan Mayen', phone: '47',},
        { value: 'SK', label: 'Slovakia', phone: '421' },
        { value: 'SL', label: 'Sierra Leone', phone: '232' },
        { value: 'SM', label: 'San Marino', phone: '378' },
        { value: 'SN', label: 'Senegal', phone: '221' },
        { value: 'SO', label: 'Somalia', phone: '252' },
        { value: 'SR', label: 'Suriname', phone: '597' },
        { value: 'SS', label: 'South Sudan', phone: '211' },
        { value: 'ST', label: 'Sao Tome and Principe', phone: '239',},
        { value: 'SV', label: 'El Salvador', phone: '503' },
        { value: 'SX', label: 'Sint Maarten (Dutch part)', phone: '1-721',},
        { value: 'SY', label: 'Syrian Arab Republic', phone: '963',},
        { value: 'SZ', label: 'Swaziland', phone: '268' },
        { value: 'TC', label: 'Turks and Caicos Islands', phone: '1-649',},
        { value: 'TD', label: 'Chad', phone: '235' },
        { value: 'TF', label: 'French Southern Territories', phone: '262',},
        { value: 'TG', label: 'Togo', phone: '228' },
        { value: 'TH', label: 'Thailand', phone: '66' },
        { value: 'TJ', label: 'Tajikistan', phone: '992' },
        { value: 'TK', label: 'Tokelau', phone: '690' },
        { value: 'TL', label: 'Timor-Leste', phone: '670' },
        { value: 'TM', label: 'Turkmenistan', phone: '993' },
        { value: 'TN', label: 'Tunisia', phone: '216' },
        { value: 'TO', label: 'Tonga', phone: '676' },
        { value: 'TR', label: 'Turkey', phone: '90' },
        { value: 'TT', label: 'Trinidad and Tobago', phone: '1-868',},
        { value: 'TV', label: 'Tuvalu', phone: '688' },
        { value: 'TW', label: "China\'s Taiwan", phone: '886',},
        { value: 'TZ', label: 'United Republic of Tanzania', phone: '255',},
        { value: 'UA', label: 'Ukraine', phone: '380' },
        { value: 'UG', label: 'Uganda', phone: '256' },
        { value: 'US', label: 'United States', phone: '1', suggested: true,},
        { value: 'UY', label: 'Uruguay', phone: '598' },
        { value: 'UZ', label: 'Uzbekistan', phone: '998' },
        { value: 'VA', label: 'Holy See (Vatican City State)', phone: '379',},
        { value: 'VC', label: 'Saint Vincent and the Grenadines', phone: '1-784',},
        { value: 'VE', label: 'Venezuela', phone: '58' },
        { value: 'VG', label: 'British Virgin Islands', phone: '1-284',},
        { value: 'VI', label: 'US Virgin Islands', phone: '1-340',},
        { value: 'VN', label: 'Vietnam', phone: '84' },
        { value: 'VU', label: 'Vanuatu', phone: '678' },
        { value: 'WF', label: 'Wallis and Futuna', phone: '681' },
        { value: 'WS', label: 'Samoa', phone: '685' },
        { value: 'XK', label: 'Kosovo', phone: '383' },
        { value: 'YE', label: 'Yemen', phone: '967' },
        { value: 'YT', label: 'Mayotte', phone: '262' },
        { value: 'ZA', label: 'South Africa', phone: '27' },
        { value: 'ZM', label: 'Zambia', phone: '260' },
        { value: 'ZW', label: 'Zimbabwe', phone: '263' },
    ];

    const handleChangeStar = (value: string) => {
        setStar(value);
    }

    const handleChangeCountry = (value: string) => {
        setCountry(value);
    }

    const handleRenderTableStar = (impact: string) => {
        switch (impact) {
            case "None":
                return 0;
            case "Low":
                return 1;
            case "Medium":
                return 2;
            case "High":
                return 3;
        }

        return 0;
    }

    const handleGetCalendarData = async () => {
        setLoading(true);
        const params = {
            ...params_economic_calendar.params,
            from: dayjs(date).format("YYYY-MM-DD"),
            to: "",
            country,
            importance: star
        };

        const result = await http.get(params_economic_calendar.url, { params });

        if(result.data.status === 0) {
            const data = await result.data.data;
            const now = dayjs(date)?.startOf("day");
            const filterData = data.filter((item: any, index: number) => {
                const eventDate = dayjs(item.date);
                return eventDate.isAfter(now) && index < 8;
            });

            setTableData(filterData);
            setLoading(false);
        }
    }

    React.useEffect(() => {
        setDate(new Date());
    }, []);

    React.useEffect(() => {
        handleGetCalendarData();
    }, [ date, star, country ])


    return (
        <section className={"bg-theme-deep-bg p-4 lg:p-30"}>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
            >
                <Typography
                    variant={"h1"}
                    className={"font-medium text-center !text-white"}
                >
                    {t("title")}
                </Typography>

                <Typography
                    variant={"lead"}
                    className={"text-center !text-white mt-6"}
                >
                    {t("description")}
                </Typography>
            </motion.div>

            <div className={"mt-10 flex justify-center"}>
                <Button className={"rounded-full bg-theme-active hover:bg-theme-active-hover"}>
                    {t("explore")}
                </Button>
            </div>

            <div className={"grid grid-cols-12 gap-8 mt-10"}>
                <div className={"col-span-12 lg:col-span-3"}>
                    <div className={"h-full relative"}>
                        <img src="/images/home/calendar-assets.png" alt=""/>
                        <div className={"flex-1 h-full py-10 px-8 flex flex-col absolute bottom-0  left-0"}>
                            <Typography
                                variant={"h4"}
                                className={"!text-white mt-auto"}
                            >
                                {t("prospect.title")}
                            </Typography>
                            <Typography
                                variant={"muted"}
                                className={"!text-white mt-4"}
                            >
                                {t("prospect.description")}
                            </Typography>
                            <div className={"mt-16 flex"}>
                                <div className={"flex-1 flex justify-center"}>
                                    <Button className={"border rounded-full bg-transparent hover:bg-transparent"}>
                                        { t("buttons.past") }
                                    </Button>
                                </div>
                                <div className={"flex-1 flex justify-center"}>
                                    <Button className={"bg-white rounded-full hover:bg-white text-black"}>
                                        { t("buttons.download") }
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col-span-12 lg:col-span-9"}>
                    <div className={"h-full bg-[#161B2C] rounded-2xl p-6"}>
                        <div className={"flex"}>
                            <div className={""}>
                                <Label htmlFor="date" className={"px-1 text-white mb-2"}>
                                    { CommonT("date") }
                                </Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            id="date"
                                            className="justify-between font-normal w-32 lg:w-48"
                                        >
                                            {date ? date.toLocaleDateString() : "Select date"}
                                            <ChevronDownIcon/>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            captionLayout="dropdown"
                                            onSelect={(date) => {
                                                setDate(date)
                                                setOpen(false)
                                            }}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className={"ml-4"}>
                                <Label htmlFor="date" className={"px-1 text-white mb-2"}>
                                    { CommonT("star") }
                                </Label>
                                <Select value={star} onValueChange={handleChangeStar}>
                                    <SelectTrigger className={"bg-white lg:min-w-40"}>
                                        <SelectValue placeholder="Theme"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            starAry.map((item, index) => (
                                                <SelectItem key={index} value={item.value}>
                                                    { item.label }
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className={"ml-4"}>
                                <Label htmlFor="date" className={"px-1 text-white mb-2"}>
                                    { CommonT("counties") }
                                </Label>
                                <Select value={country} onValueChange={handleChangeCountry}>
                                    <SelectTrigger className={"bg-white lg:min-w-40"}>
                                        <SelectValue placeholder="Theme"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            countriesAry.map((item, index) => (
                                                <SelectItem key={index} value={item.value}>
                                                    { item.value !== "all" ? (
                                                        <div className={"flex items-center"}>
                                                            <img loading="lazy"
                                                                 width="30"
                                                                 height="10"
                                                                 srcSet={`https://flagcdn.com/w40/${item.value.toLowerCase()}.png 2x`}
                                                                 src={`https://flagcdn.com/w20/${item.value.toLowerCase()}.png`}
                                                                 alt="country"
                                                                 className={"mr-2 w-6 h-4"}
                                                            />
                                                            { item.label }
                                                        </div>
                                                    ) : item.label}
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className={"mt-4"}>
                            <Table className={"bg-white rounded-sm"}>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className={"w-40"}>{ CommonT("time") }</TableHead>
                                        <TableHead className={"w-60"}>{ CommonT("event") }</TableHead>
                                        <TableHead>{ CommonT("prev") }</TableHead>
                                        <TableHead>{ CommonT("estimate") }</TableHead>
                                        <TableHead>{ CommonT("currency") }</TableHead>
                                        <TableHead>{ CommonT("counties") }</TableHead>
                                        <TableHead>{ CommonT("star") }</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        loading ? (
                                            Array.from({ length: 12 }).map((_, i) => (
                                                <TableRow key={i}>
                                                    <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                                    <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                                    <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                                    <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                                    <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                                    <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                                </TableRow>
                                            ))
                                        ) : (
                                            tableData.map((item: any, index: number) => (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        { dayjs(item.date).format("MM-DD HH:mm:ss") }
                                                    </TableCell>
                                                    <TableCell>
                                                        <Tooltip>
                                                            <TooltipTrigger className={"max-w-60 !truncate"}>{ item.event }</TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className={"!text-white"}>{ item.event }</p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TableCell>
                                                    <TableCell>{item.previous ?? "--"}</TableCell>
                                                    <TableCell>{item.estimate ?? "--"}</TableCell>
                                                    <TableCell>{item.currency}</TableCell>
                                                    <TableCell>{item.country}</TableCell>
                                                    <TableCell>
                                                        <StarRating readOnly value={handleRenderTableStar(item.impact)} max={3} />
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        )
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CalendarComponent;